import React, { useState } from "react";
import { auth } from "./ClientDatabase.ts";
import { showToast } from "./toastMessage/ToastMessage.tsx";
import { CustomizeUrlTypes } from "./TypesExport.ts";

const CustomisUrl = ({
  originalCode,
  currentShortUrl,
  setShowModal,
}: CustomizeUrlTypes) => {
  const [newCode, setNewCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showTimeOut, setShowTimeout] = useState<boolean>(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUser = auth.currentUser;
    const errorCode = newCode.includes("/");
    if (currentUser) {
      if (errorCode) {
        setError('input must not include "/" ');
        setShowTimeout(true)
      } else {
        setShowTimeout(false)
        try {
          setLoading(true);
          const idToken = await currentUser.getIdToken();
          const response = await fetch(
            `https://swift-short.netlify.app/updateurl/${originalCode}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "x-user-id": idToken,
              },
              body: JSON.stringify({ newCode }),
            }
          );

          if (!response.ok) {
            const result = await response.json();
            throw new Error(result.error);
          }
          setLoading(false);
          setShowModal(false);

        } catch (error: any) {
          setLoading(false);
          setError(error.message);
        }
      }
    } else {
      setLoading(false);
      setError("User not authenticated");
      showToast("User not authenticated", "error");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleUpdate}>
          <div className="p-[20px]">
            <div
              onClick={() => setShowModal(false)}
              className=" cursor-pointer flex justify-end"
            >
              <p className="text-2xl border-2 px-4 py-1 gradient_background text-white rounded-md">
                X
              </p>
            </div>
            <div className="text-center my-3 blue_gradient w-full font-medium">
              <label>{currentShortUrl}</label>
            </div>
            {showTimeOut &&<p className="text-red-600 font-medium mt-3">{error}</p>}
            <div>
              <input
                type="text"
                required
                value={newCode}
                className="w-full rounded-md outline-none border py-2 pl-2 my-2"
                onChange={(e) => setNewCode(e.target.value)}
                placeholder={originalCode}
              />
            </div>
            <button className="border-2 text-white gradient_background font-bold rounded-md mt-3 px-2 py-2">
              {loading ? <p>Updating...</p> : <p>Update URL</p>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomisUrl;
