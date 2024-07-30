import React from "react";
import Img from "../../assets/pexels-asadphoto-457882.jpg";

const SectionOne = () => {
  return (
    <>
      <section className="">
        <div className="w-full py-[40px] text-center px-[2rem]">
          <div className="lg:w-[50%] md:w-[80%] w-full m-auto">
            <p className="text-2xl font-bold">
              Transform long, complicated URLs into short, easy-to-share links
              with just one click.
            </p>
          </div>
        </div>
      </section>

      <section className="md:flex px-4 md:text-start text-center block w-full md:space-x-6 lg:w-[90%] m-auto justify-between items-center mt-[60px]">
        <div className="lg:w-[40%] md:w-[90%] w-full">
          <div>
            <h1 className="font-bold text-lg mb-2">
              Shrink Your Links, Expand Your Reach
            </h1>
            <p className="leading-[1.3rem] text-[#c4c4c4]">
              Turn lengthy URLs into compact, shareable links in seconds.
              Enhance your digital footprint and make sharing simpler than ever.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">
              Boost Your Engagement
            </h2>
            <p className="leading-[1.3rem] text-[#c4c4c4]">
              Increase your link click-through rates with easy-to-remember short
              URLs. See the difference in your engagement metrics.
            </p>
          </div>
        </div>
        <img
          className="  md:w-[400px] md:h-full h-[300px] w-full object-cover m-auto md:mt-0 mt-10"
          src={Img}
          alt="img"
        />
      </section>

      <section className="flex px-4 md:text-start  md:flex-row flex-col-reverse text-center w-full md:space-x-6 lg:w-[90%] m-auto justify-between items-center mt-[60px]">
        <img
          className=" md:w-[400px] md:h-full h-[300px] w-full object-cover md:m-0 m-auto"
          src={Img}
          alt="img"
        />
        <div className="lg:w-[40%] md:mb-0 mb-10 md:w-[90%] w-full">
          <div>
            <h2 className="font-bold  mt-10 md:mt-0 text-lg mb-2 md:text-end">
              Real-Time Click Tracking
            </h2>
            <p className="leading-[1.3rem] md:text-end text-[#c4c4c4]">
              Stay informed with up-to-the-minute analytics. See who’s clicking
              your links, from where, and when, all in one place.
            </p>
          </div>
          <div>
            <h2 className="font-bold md:text-end text-lg mt-3 mb-2">Secure and Trustworthy</h2>
            <p className="leading-[1.3rem] text-end text-[#c4c4c4]">
              Our platform ensures your links are safe and reliable. Trust in
              our robust security measures to keep your data protected.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
