import React from "react";
import { userDashboard } from "../TypesExport";
import { TbCopy } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";

const UserDashboardUi = ({ Clicks, ShortUrl, handleeachData,date }: userDashboard) => {
  return (
    <>
      <div className="border sm:w-auto w-[120%] text-balance break-words flex items-center justify-between shadow-md py-4 px-3">
        <div onClick={handleeachData} className="w-full flex items-center h-[50px]">
        <span className="md:w-[65%] w-[95%] flex justify-between">
        <h1 className="font-bold text-sm">{ShortUrl}</h1>
        <p className="hidden md:block">clicks: {Clicks}</p>
        </span>
        </div>
        <div>
          <p className="flex items-center space-x-10 pl-1 mb-2">
            <span className="cursor-pointer z-10"><TbCopy /></span>
            <span className="cursor-pointer"><AiTwotoneDelete /></span>
          </p>
        <p className="">{date}</p>
        </div>
      </div>
    </>
  );
};

export default UserDashboardUi;
