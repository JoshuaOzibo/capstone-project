import { useState } from "react";
import { auth } from "./ClientDatabase.ts";
import Modal from "./Modal.tsx";


const Shortener = () => {
  const [shortUrl, setShortUrl] = useState<string | null>("");
  const [originalUrl, setOriginalUrl] = useState<string >("");
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(auth.currentUser){
      try {
        const idToken = await auth.currentUser.getIdToken();
        const response = await fetch("http://127.0.0.1:8000/shortenurl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
           "x-user-id": idToken,
          },
          body: JSON.stringify({ originalUrl }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        setShortUrl(result.shortUrl);
        console.log("Success:", result);
      } catch (error) {
        setError("Failed to shorten URL. Please try again later.")
        console.error("Error:", error);
      }
    }else{
      setOpen(true)
    }
  };

  console.log(error)

  return (
    <div>
      {open && <Modal setOpen={setOpen} open={open} />}
      <form onSubmit={handleSubmit}>
        <div className="md:flex items-center justify-center block">
          <input
            type="url"
            required
            className="text-black rounded-sm md:rounded-l-sm p-4 md:my-10 lg:w-[40%] md:h-[50px] md:w-[50%] w-[70%] h-[50px]"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
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
          Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default Shortener;
