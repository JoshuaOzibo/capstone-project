import React, { useState } from "react";
import { auth } from "./ClientDatabase.ts";
import ToastMessage, { showToast } from './toastMessage/ToastMessage.tsx'

type urlType = {
  originalCode: string;
  currentShortUrl: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomisUrl = ({
  originalCode,
  currentShortUrl,
  setShowModal
}: urlType) => {
  const [newCode, setNewCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        setLoading(true);
        const idToken = await currentUser.getIdToken();
        const response = await fetch(
          `http://127.0.0.1:8000/updateurl/${originalCode}`,
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
        };
        
        setLoading(false);
        setShowModal(false)
        showToast('URL updated successfully!', 'error')
        
      } catch (error) {
        setError(error.message);
        showToast(`${error.message}`, 'error');
      }
    } else {
      setError("User not authenticated");
      showToast('User not authenticated', 'error');
    }

  };
  return (
    <>
      <ToastMessage />
        <div>
        <form onSubmit={handleUpdate}>
          <div className="p-[20px]">
            <div>
              <label>Current Short URL: {currentShortUrl}</label>
            </div>
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
            <button className="border-2 font-bold rounded-md mt-3 px-2 py-2">
              {loading ? <p>Loading...</p> : <p>Update URL</p>}
            </button>
          </div>
        </form>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default CustomisUrl;
