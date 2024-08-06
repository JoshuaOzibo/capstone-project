import React, { useState } from "react";
import { userDashboard } from "../TypesExport";
import { TbCopy } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { auth } from "../ClientDatabase";
import ToastMessage, { showToast } from "../toastMessage/ToastMessage";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import "../Styles.css";
import { CiEdit } from "react-icons/ci";
import {motion} from 'framer-motion';

const UserDashboardUi = ({
  Clicks,
  ShortUrl,
  handleeachData,
  date,
  urlCode,
  onDelete,
  setCustomisableLongUrl,
  setOriginalCustomiseValue,
  setShowModal,
}: userDashboard) => {
  const [showMarkGood, setShowMarkGood] = useState(false);

  const handleDelete = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      showToast("User not authenticated", "error");
      return;
    }
    try {
      const idToken = await currentUser.getIdToken();
      const response = await fetch(
        `http://127.0.0.1:8000/deleteurl/${urlCode}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-user-id": idToken,
          },
        }
      );

      if (response.ok) {
        showToast("successful deleted", "success");
        onDelete();
      } else {
        showToast("delete error", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCustomiseUrl = () => {
    setShowModal(true);
    setCustomisableLongUrl(ShortUrl);
    setOriginalCustomiseValue(urlCode);
  };

  const handleCopy = (ShortUrl: string) => {
    setShowMarkGood(true);

    navigator.clipboard.writeText(ShortUrl).then(
      () => {
        setTimeout(() => setShowMarkGood(false), 700);
      },
      (error) => {
        setShowMarkGood(false);
      }
    );
  };
  return (
    <>
      <ToastMessage />
      <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6}} className="border mb-3 rounded-l-md cards_colors_box text-white sm:w-auto w-[120%] text-balance break-words flex items-center justify-between py-4 px-3">
        <div
          onClick={handleeachData}
          className="w-full flex items-center h-[50px]"
        >
          <span className="md:w-[60%] w-[95%] flex justify-between">
            <h1 className="font-medium text-sm">{ShortUrl}</h1>
            <p className="hidden md:block font-medium">clicks: {Clicks}</p>
          </span>
        </div>
        <div>
          <p className="flex items-center space-x-4 mb-2">
            <span className="cursor-pointer z-10">
              {showMarkGood && (
                <IoCheckmarkCircleSharp
                  size={16}
                  className={showMarkGood ? "white " : ""}
                />
              )}
              {!showMarkGood && <TbCopy onClick={() => handleCopy(ShortUrl)} />}
            </span>
            <span
              onClick={handleCustomiseUrl}
              className="text-[13px] font-medium cursor-pointer"
            >
              <CiEdit size={22} />
            </span>
            <span onClick={handleDelete} className="cursor-pointer">
              <AiTwotoneDelete />
            </span>
          </p>
          <p className="font-medium">{date}</p>
        </div>
      </motion.div>
    </>
  );
};

export default UserDashboardUi;
