const DashboardSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 mt-10 mx-5">
        <div className="px-5 bg-slate-200 animate-pulse shadow-md md:h-[200px] h-[150px] mt-5">
          <p className="md:text-2xl md:font-black w-[30%] animate-pulse bg-slate-300 font-bold"></p>
          <p className=" mt-[30px] w-[30%] h-[20px] animate-pulse bg-slate-300 md:text-5xl text-center text-3xl md:font-black font-bold items-center"></p>
        </div>
        <div className="px-5 bg-slate-200 animate-pulse shadow-md md:h-[200px] h-[150px] mt-5">
          <p className="md:text-2xl md:font-black w-[30%] animate-pulse bg-slate-300 font-bold"></p>
          <p className=" mt-[30px] w-[30%] h-[20px] animate-pulse bg-slate-300 md:text-5xl text-3xl md:font-black font-bold items-center text-center"></p>
        </div>
      </div>

      <div className="border animate-pulse bg-slate-300 mx-5 text-balance break-words flex items-center mt-5 justify-between shadow-md py-4 px-3">
        <div className="w-full flex items-center h-[50px]">
          <span className="md:w-[65%] bg-slate-300 animate-pulse w-[95%] flex justify-between">
            <h1 className="font-bold text-sm"></h1>
            <p className="hidden md:block"></p>
          </span>
        </div>
        <div>
          <p className="flex items-center space-x-10 pl-1 mb-2">
            <span className="cursor-pointer z-10"></span>
            <span className="cursor-pointer"></span>
          </p>
          <p className=""></p>
        </div>
      </div>
      <div className="border animate-pulse bg-slate-300 mx-5 text-balance break-words flex items-center mt-7 justify-between shadow-md py-4 px-3">
        <div className="w-full flex items-center h-[50px]">
          <span className="md:w-[65%] bg-slate-300 animate-pulse w-[95%] flex justify-between">
            <h1 className="font-bold text-sm"></h1>
            <p className="hidden md:block"></p>
          </span>
        </div>
        <div>
          <p className="flex items-center space-x-10 pl-1 mb-2">
            <span className="cursor-pointer z-10"></span>
            <span className="cursor-pointer"></span>
          </p>
          <p className=""></p>
        </div>
      </div>
      <div className="border animate-pulse bg-slate-300 mx-5 text-balance break-words flex items-center mt-7 justify-between shadow-md py-4 px-3">
        <div className="w-full flex items-center h-[50px]">
          <span className="md:w-[65%] bg-slate-300 animate-pulse w-[95%] flex justify-between">
            <h1 className="font-bold text-sm"></h1>
            <p className="hidden md:block"></p>
          </span>
        </div>
        <div>
          <p className="flex items-center space-x-10 pl-1 mb-2">
            <span className="cursor-pointer z-10"></span>
            <span className="cursor-pointer"></span>
          </p>
          <p className=""></p>
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;
