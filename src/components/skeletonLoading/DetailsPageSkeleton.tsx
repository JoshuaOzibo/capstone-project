const Details = () => {
  return (
    <>
      <section className="px-5">
        <main className="w-full grid gap-5 my-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold bg-[#c4c4c4] py-2 w-[100px]"></h3>
            <p className=" bg-[#c4c4c4] py-2 mb-[40px] mt-2 w-[150px]"></p>
            <p className="bg-[#c4c4c4] py-3 m-auto w-[50px] animate-pulse mt-2"></p>
            <p className="pb-[50px]"></p>
          </div>

          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold bg-[#c4c4c4] py-2 w-[100px]"></h3>
            <p className=" bg-[#c4c4c4] py-2 mb-[40px] mt-2 w-[150px]"></p>
            <p className="bg-[#c4c4c4] w-[100px] py-3 m-auto animate-pulse mt-2"></p>
            <p className="pb-[50px]"></p>
          </div>

          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold bg-[#c4c4c4] py-2 w-[100px]"></h3>
            <p className=" bg-[#c4c4c4] py-2 mb-[40px] mt-2 w-[150px]"></p>
            <p className="bg-[#c4c4c4] w-[200px] py-3 m-auto animate-pulse mt-2"></p>
            <p className="pb-[50px]"></p>
          </div>
        </main>

        <section className="w-full gap-5 grid md:grid-cols-2 grid-cols-1">
          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold bg-[#c4c4c4] py-2 w-[100px] animate-pulse"></h3>
            <p className=" text-[#a8a7a7] bg-[#c4c4c4] py-2 w-[200px] mt-2 mb-5 animate-pulse"></p>

            <div className="bg-[#c4c4c4] py-[200px] animate-pulse"></div>
          </div>
          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold bg-[#c4c4c4] py-2 w-[100px] animate-pulse"></h3>
            <p className=" text-[#a8a7a7] bg-[#c4c4c4] py-2 w-[200px] mt-2 mb-5 animate-pulse"></p>

            <div className="bg-[#c4c4c4] py-[200px] animate-pulse"></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Details;
