import { useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, doc, updateDoc, increment, getDocs, query, where } from "firebase/firestore";
import shortenUrl from "./services/UrlShortenerComponent/UrlShortenRequest.ts";
import Modal from "./Modal.tsx";

const shortenUrlLink = shortenUrl;

const Shortener = () => {
  const [shortUrl, setShortUrl] = useState<string | null>("");
  const [longUrl, setLongUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [clicks, setClicks] = useState(0);

  const token: string = import.meta.env.VITE_Token;
  const groupGuid: string = import.meta.env.VITE_Group_Id;
  const shortenUrlApi: string = import.meta.env.VITE_Shorten_Api_Url;

  const shortenUrl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!auth.currentUser) {
      console.log("user not signin and login");
      setOpen(true);
      return;
    } else {
      const result = await shortenUrlLink(
        longUrl,
        token,
        groupGuid,
        shortenUrlApi
      );

      try {
        if (result.shortUrl) {
          setShortUrl(result.shortUrl);

          if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const userUrlsRef = collection(db, "users", userId, "ownerData");

            // Add new URL document to the user's URLs subcollection
            await addDoc(userUrlsRef, {
              longUrl: longUrl,
              shortUrl: result.shortUrl,
              clicks: 0,
            });
            //success adding user data to db
            console.log("Shortened URL stored in Firestore");
          } else {
            //error adding userData
            console.log("No user is signed in");
          }
        }
      } catch (error) { // catch error if failed to shorten url
        setError(`error: ${error}`);
        console.log("Failed to shorten URL");
      }
    }
  };

  const clickUrl = async () => {
    setClicks(clicks + 1);

    if (auth.currentUser && shortUrl) {
      const userId = auth.currentUser.uid;
      try {
        // Get the document with the matching shortUrl
        const userUrlsRef = collection(db, "users", userId, "ownerData");
        const q = query(userUrlsRef, where("shortUrl", "==", shortUrl));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (docSnapshot) => {
          const userUrlDocRef = doc(db, "users", userId, "ownerData", docSnapshot.id);
          await updateDoc(userUrlDocRef, {
            clicks: increment(1),
          });
        });
      } catch (error) {
        console.log("Failed to update click count", error);
      }
    }
  };

  return (
    <div>
      {open && <Modal setOpen={setOpen} open={open} />}
      <form onSubmit={shortenUrl}>
        <div className="md:flex items-center justify-center block">
          <input
            type="url"
            required
            className="text-black rounded-sm md:rounded-l-sm p-4 md:my-10 lg:w-[40%] md:h-[50px] md:w-[50%] w-[70%] h-[50px]"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter URL to shorten"
          />
          <br className="md:hidden" />
          <button
            className="md:w-[20%] lg:w-[15%] md:h-[50px] md:mt-0 mt-[20px] md:rounded-r-sm rounded-sm w-[70%] h-[40px] font-bold bg-blue-500"
            type="submit"
          >
            Shorten URL
          </button>
        </div>
      </form>
      {shortUrl && (
        <p className="py-3 bg-white text-center">
          Shortened URL: <a onClick={clickUrl} href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default Shortener;
