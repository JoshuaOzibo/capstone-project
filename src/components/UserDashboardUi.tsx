import React from "react";
import {userDashboard} from '../components/TypesExport';

const UserDashboardUi = ({Clicks, LongUrl, ShortUrl}: userDashboard) => {
  return (

      <>
        <div className="mt-4 text-balance mx-4 border my-10 shadow-md rounded-md px-4 py-[50px]">
        <div className="border shadow-md py-4 px-4 w-[150px] text-center font-bold">clicks: {Clicks}</div>
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
      </>
  );
};

export default UserDashboardUi;
