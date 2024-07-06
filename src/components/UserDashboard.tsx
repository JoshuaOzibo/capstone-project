// import React, { useEffect, useState } from 'react';
// import { auth, db } from '../firebaseConfig';
// import { doc, getDoc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// const UserDashboard = () => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (user) => {
//           if (user) {
//             const userDoc = await getDoc(doc(db, 'users', user.uid));
//             if (userDoc.exists()) {
//               setUserData(userDoc.data());
//             }
//           }
//           setLoading(false);
//         });
    
//         return () => unsubscribe();
//       }, []);
    
//       if (loading) {
//         return <div>Loading...</div>;
//       }
    
//       if (!userData) {
//         return <div>No user data found.</div>;
//       }


//   return (
//     <div>
//       <h2>User Dashboard</h2>
//       <p>Name: {userData.name}</p>
//       <p>Clicks: {userData.clicks}</p>
//       <p>Long URL: {userData.longUrl}</p>
//       <p>Short URL: {userData.shortUrl}</p>
//     </div>
//   )
// }

// export default UserDashboard
