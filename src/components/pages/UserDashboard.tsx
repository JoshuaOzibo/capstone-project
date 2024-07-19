import React, { useEffect, useState } from "react";
import { auth, db } from "../ClientDatabase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import UserDashboardUi from "./UserDashboardUi";
import { Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UrlData {
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  urlCode: string;
  handleeachData?: () => void
}

const UserDashboard = () => {
  const [userData, setUserData] = useState<UrlData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userUrlsRef = collection(db, "users", userId, "ownerData");

        try {
          const querrySnapshot = await getDocs(userUrlsRef);
          const data = querrySnapshot.docs.map((doc) => doc.data() as UrlData);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData();
      } else {
        setUserData([]);
        setLoading(false);
      }
    });
  }, []);

  const analyticData = userData.map((item, index) => {
    return {
      clicks: item.clicks,
      activities: index,
    };
  });
  const sumClicks = analyticData.reduce((sum, item) => sum + item.clicks, 0);

  const handleItemClick = (urlCode: string) => {
    navigate(`/details/${urlCode}`);
    console.log(urlCode)
  };

  return (
    <section>
      <h2 className="text-center mt-12 font-bold text-2xl">User Analytics</h2>
      <div className="grid grid-cols-2 gap-5 mx-5">
        <div className="px-5 shadow-md md:h-[200px] h-[150px] mt-5">
          <p className="md:text-2xl md:font-black font-bold">Total Clicks:</p>
          <p className=" mt-[30px] md:text-5xl text-center text-3xl md:font-black font-bold items-center">
            {sumClicks}
          </p>
        </div>
        <div className="px-5  shadow-md md:h-[200px] h-[150px] mt-5">
          <p className="md:text-2xl md:font-black font-bold">Activities:</p>
          <p className=" mt-[30px] md:text-5xl text-3xl md:font-black font-bold items-center text-center">
            {userData.length}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center h-[100vh]">
        <div
          className={
            userData.length === 0
              ? "md:w-[60%] w-full h-[600px] mt-5"
              : "md:w-[100%] mx-5 w-full h-[600px] mt-5 overflow-y-scroll"
          }
        >
          {loading ? (
            <div className="md:w-[60%] w-full h-[600px] mt-5">Loading...</div>
          ) : userData.length === 0 ? (
            <p>No URLs found.</p>
          ) : (
            userData.map((url, index) => (
              <UserDashboardUi
                Clicks={url.clicks}
                LongUrl={url.originalUrl}
                ShortUrl={url.shortUrl}
                handleeachData={() => handleItemClick(url.urlCode)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
export default UserDashboard;
