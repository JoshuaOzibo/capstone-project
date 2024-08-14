import { useState } from "react";
import { auth } from "../ClientDatabase.ts";
import Modal from "../auth/LoginandsignupModal.tsx";
import DisplayShortUrlResult from "../shortUrlResult/DisplayShortUrlResult.tsx";
import { FadeLoader } from "react-spinners";
import { showToast } from "../toastMessage/ToastMessage.tsx";

import { openModalType } from "../TypesExport.ts";

const Shortener = ({ open, setOpen }: openModalType) => {
  const [shortUrl, setShortUrl] = useState<string | null>("");
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (auth.currentUser) {
      try {
        setIsLoading(true);
        const idToken = await auth.currentUser.getIdToken();

        const response = await fetch(
          " https://swift-short.netlify.app/shortenurl",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-user-id": idToken,
            },
            body: JSON.stringify({ originalUrl }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setIsLoading(false);
        setShortUrl(result.shortUrl);
        setShowResultModal(true);
        showToast("url shoten syccessfully", "success");
      } catch (error) {
        showToast("Failed to shorten URL. Please try again later.", "error");
        setIsLoading(false);
        return;
      }
    } else {
      setOpen(true);
    }

    setOriginalUrl("");
  };

  return (
    <div>
      {open && <Modal setOpen={setOpen} open={open} />}
      <form onSubmit={handleSubmit}>
        <div className="md:flex items-center justify-center block">
          <input
            type="url"
            required
            className="text-black rounded-sm md:rounded-l-sm p-4 md:my-10 lg:w-[40%] md:h-[50px] md:w-[50%] w-[90%] h-[50px]"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter URL to shorten"
          />
          <br className="md:hidden" />
          <button
            className="md:w-[20%] md:m-0 m-auto flex justify-center relative lg:w-[15%] md:h-[50px] md:mt-0 mt-[20px] md:rounded-r-sm rounded-sm  w-[90%] h-[50px] font-bold gradient_background"
            type="submit"
          >
            {isLoading ? (
              <p className=" absolute m-auto">
                <FadeLoader
                  height={8}
                  margin={1}
                  radius={10}
                  speedMultiplier={3}
                  width={4}
                />
              </p>
            ) : (
              <p className="mt-3 text-white">Shorten URL</p>
            )}
          </button>
        </div>
      </form>

      {showResultModal && shortUrl && (
        <DisplayShortUrlResult
          shortUrl={shortUrl}
          setShowResultModal={setShowResultModal}
        />
      )}
    </div>
  );
};

export default Shortener;
