import { useState } from "react";
import Shortener from "./Shortener";
import Navbar from "./Navbar";
import "../Styles.css";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        id="top"
        className="relative bg-[#090a15] w-full border-b-4 mb-10 border-b-[#151832] overflow-hidden"
      >
        <div className="z-20 absolute w-full  border-5">
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <div className="z-10 flex justify-center w-full  md:mt-[20rem] mt-[18rem] text-center text-white absolute">
          <div>
            <h1 className="md:text-4xl -pt-4 pb-3 lg:text-5xl sm:text-3xl text-2xl font-bold blue_gradient">
              Giving superpowers to modern teams
            </h1>
            <p className="text-center lg:text-2xl md:text-xl mt-2 w-[93%] m-auto font-medium blue_gradient_p">
              Streamline your links and enhance your team's efficiency with our
              powerful URL shortener.
            </p>
          </div>
        </div>
        <div className="absolute flex md:mt-[13rem] mt-[28rem] w-full justify-center items-center z-10">
          <div className=" md:mt-[14rem] w-full text-center">
            <Shortener open={open} setOpen={setOpen} />
          </div>
        </div>
        <img
          src="https://www.prisma.io/illustrations/home-page/hero-lines.svg"
          className="md:w-full w-full h-[50rem] object-cover"
          alt="HeroImg"
        />
      </div>
    </>
  );
};

export default HeroSection;
