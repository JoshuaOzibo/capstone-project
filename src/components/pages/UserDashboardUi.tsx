import React, { useState } from "react";
import { userDashboard } from "../TypesExport";
import { TbCopy } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { auth } from "../ClientDatabase";
import ToastMessage, { showToast } from "../toastMessage/ToastMessage";
import CustomisUrl from "../CustomisUrl";


const UserDashboardUi = ({
  Clicks,
  ShortUrl,
  handleeachData,
  date,
  urlCode,
  onDelete,
  setCustomisableLongUrl,
  setOriginalCustomiseValue,
  setShowModal
}: userDashboard) => {

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
        console.log("delete successful");
        onDelete();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCustomiseUrl = () => {
    setShowModal(true)
    setCustomisableLongUrl(ShortUrl);
    setOriginalCustomiseValue(urlCode)
  };
  return (
    <>
      <ToastMessage />
      <div className="border sm:w-auto w-[120%] text-balance break-words flex items-center justify-between shadow-md py-4 px-3">
        <div
          onClick={handleeachData}
          className="w-full flex items-center h-[50px]"
        >
          <span className="md:w-[65%] w-[95%] flex justify-between">
            <h1 className="font-bold text-sm">{ShortUrl}</h1>
            <p className="hidden md:block">clicks: {Clicks}</p>
          </span>
        </div>
        <div>
          <p className="flex items-center space-x-4 mb-2">
            <span className="cursor-pointer z-10">
              <TbCopy />
            </span>
            <span
              onClick={handleCustomiseUrl}
              className="text-[13px] cursor-pointer"
            >
              Edit
            </span>
            <span onClick={handleDelete} className="cursor-pointer">
              <AiTwotoneDelete />
            </span>
          </p>
          <p className="">{date}</p>
        </div>
      </div>
    </>
  );
};

export default UserDashboardUi;
