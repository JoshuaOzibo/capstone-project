import { useEffect, useState } from "react";
import { auth, db } from "../ClientDatabase";
import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import UserDashboardUi from "./UserDashboardUi";
import { useNavigate } from "react-router-dom";
import DashboardSkeleton from "../skeletonLoading/DashboardSkeleton";
import CustomisUrl from "../CustomisUrl";
import Modal from "../resuableModal";
import { parentUserDashboardUrlType } from "../TypesExport";
import "../Styles.css";
import { motion } from "framer-motion";

const UserDashboard = () => {
  const [userData, setUserData] = useState<parentUserDashboardUrlType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [originalCustomiseValue, setOriginalCustomiseValue] = useState<string>("");
  const [customisableLongUrl, setCustomisableLongUrl] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userUrlsRef = collection(db, "users", userId, "ownerData");

        try {
          onSnapshot(userUrlsRef, (querySnapshot) => {
            const data = querySnapshot.docs.map(
              (doc) => doc.data() as parentUserDashboardUrlType
            );
            setUserData(data);
            setLoading(false);
            setError(null);
          });
        } catch (error) {
          setError("Error fetching user data:");
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
  };

  const handleDelete = (urlCode: string) => {
    // Remove item from state
    setUserData(userData.filter((item) => item.urlCode !== urlCode));
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-medium">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer cards_colors_box border border-2xl border-black p-1 px-2 rounded-sm mt-2 ml-2"
        >
          Back Home
        </button>
      </div>
    );
  }
  if (userData.length === 0) {
    return (
      <>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer cards_colors_box border border-2xl border-black p-1 px-2 rounded-sm mt-2 ml-2"
        >
          Back Home
        </button>
        <p className="font-medium md:text-3xl text-2xl text-center mt-[300px]">
          No URLs found.
        </p>
      </>
    );
  } else {
    return (
      <section>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer text-white font-medium cards_colors_box border border-2xl p-1 px-2 rounded-sm mt-2 ml-2"
        >
          Back Home
        </button>
        {showModal && (
          <Modal>
            <CustomisUrl
              setShowModal={setShowModal}
              originalCode={originalCustomiseValue}
              currentShortUrl={customisableLongUrl}
            />
          </Modal>
        )}
        <h2 className="text-center mt-12 font-bold text-2xl blue_gradient md:text-4xl">
          User Dashboard
        </h2>
        <div className="grid grid-cols-2 gap-5 mx-5">
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} className="px-5 text-white rounded-md cards_colors_box md:h-[200px] h-[150px] mt-5">
            <p className="md:text-2xl md:font-black font-bold">Total Clicks:</p>
            <p className=" mt-[30px] lg:text-6xl md:text-5xl sm:text-4xl text-center text-3xl md:font-black font-bold items-center">
              {sumClicks}
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="px-5 cards_colors_box text-white rounded-md md:h-[200px] h-[150px] mt-5">
            <p className="md:text-2xl md:font-black font-bold">Activities:</p>
            <p className=" mt-[30px] lg:text-6xl md:text-5xl sm:text-4xl text-3xl md:font-black font-bold items-center text-center">
              {userData.length}
            </p>
          </motion.div>
        </div>
        <div className="w-full mt-5 flex justify-center">
          <div className="md:w-[100%] mx-5 w-full h-[55vh] mt-5 overflow-y-scroll">
            {userData.map((url, index) => (
              <UserDashboardUi
                date={url.date}
                Clicks={url.clicks}
                LongUrl={url.originalUrl}
                ShortUrl={url.shortUrl}
                urlCode={url.urlCode}
                setOriginalCustomiseValue={setOriginalCustomiseValue}
                setCustomisableLongUrl={setCustomisableLongUrl}
                setShowModal={setShowModal}
                handleeachData={() => handleItemClick(url.urlCode)}
                onDelete={() => handleDelete(url.urlCode)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};
export default UserDashboard;
