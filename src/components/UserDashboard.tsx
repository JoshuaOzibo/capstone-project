import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import UserDashboardUi from './UserDashboardUi';

interface UrlData {
  longUrl: string;
  shortUrl: string;
  clicks: number;
}

const UserDashboard = () => {
    const [userData, setUserData] = useState<UrlData[]>([])
    const [loading, setLoading] = useState(true);
    const [str, setStr] = useState('');
    const [random, setRandom] = useState('')
    const [randomTwo, setRandomTwo] = useState('')

    useEffect(() => {
      const fetchUserData = async() => {

     

      if(auth.currentUser){
        const userId = auth.currentUser.uid;
            const userUrlsRef = collection(db, "users", userId, "ownerData");
            
        try{
          const querrySnapshot = await getDocs(userUrlsRef);
          const data = querrySnapshot.docs.map(doc => doc.data() as UrlData);
          setUserData(data)

        }catch(error){
          console.error('Error fetching user data:', error);
        } finally{
          setLoading(false);
        }
      }

    }


    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData();
      } else {
        setUserData([]);
        setLoading(false);
      }
    });

    }, [])

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(userData);

    const clickRandom =() => {
      const numbers = [7, 8, 9];

      const number = Math.floor(10000000 + Math.random() * 90000000);
      setRandom(number);
      const randomIndex = Math.floor(Math.random() * numbers.length);
      setRandomTwo(numbers[randomIndex])
    }


  return (// {randomTwo && <p>+{randomTwo}</p>} {random && <p>0</p>} {random && <p>{random}</p>}
    <section>
      <span>
      {`+234 ${randomTwo}0${random}`} <br />
      </span>
      <button onClick={clickRandom}>click</button>
      <h2 className='text-center mt-12 font-bold text-2xl'>User Analytics</h2>
      <div className='w-full flex justify-center h-[100vh]'>
      <div className={userData.length === 0 ? "md:w-[60%] w-full h-[600px] mt-5" : "md:w-[60%] w-full h-[600px] mt-5 overflow-y-scroll"}>

      {userData.length === 0 ? (
        <p>No URLs found.</p>
      ) : (
        userData.map((url, index) => (
          <UserDashboardUi Clicks={url.clicks} LongUrl={url.longUrl} ShortUrl={url.shortUrl}  />
        ))
      )}
      </div>
    </div>
    </section>
  )
}

export default UserDashboard

