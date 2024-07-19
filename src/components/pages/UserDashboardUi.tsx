import React from "react";
import { userDashboard } from "../TypesExport";
import { QrCode } from "lucide-react";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

const UserDashboardUi = ({ Clicks, ShortUrl, handleeachData }: userDashboard) => {
  return (
    <>
      <div onClick={handleeachData} className="border text-balance break-words flex items-center justify-between shadow-md py-4 px-3">
        <h1 className="font-bold text-sm">{ShortUrl}</h1>
        <p>clicks: {Clicks}</p>
        <div>
          <p className="flex items-center space-x-10 pl-1 mb-2">
            <span><TbCopy /></span>
            <span><AiTwotoneDelete /></span>
          </p>
        <p className="">23/02/2024</p>
        </div>
      </div>
      {/* <div className="mt-4 text-balance mx-4 border my-10 shadow-md bg-red-500 rounded-md px-4 py-[50px]">
        <QrCode size={200} values={ShortUrl} />

        <div className="border shadow-md py-4 px-4 w-[150px] text-center font-bold">clicks: {Clicks}</div>
        
        <div className="md:flex block items-center justify-center space-x-5">
        <div className="mt-4">
          <p className="border text-balance break-words flex-wrap px-2 py-4 rounded-md shadow-md font-bold">
            longUrl:
            <a target="_blank" href={LongUrl}>{LongUrl}</a>
          </p>

          <p className="border px-2 break-words text-wrap py-4 rounded-md mt-5 shadow-md font-bold">
            shortUrl: <a target="_blank" href={ShortUrl}>{ShortUrl}</a>
          </p>
        </div>
        </div>
      </div> */}
    </>
  );
};

export default UserDashboardUi;
