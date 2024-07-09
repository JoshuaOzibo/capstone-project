import React from "react";
import HeroImg from "../assets/pexels-asadphoto-457882.jpg";
import Shortener from "./Shortener";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <div class="relative w-full overflow-hidden">
      <div className="absolute w-full h-full bg-black opacity-60 z-5"></div>
      <div className="z-20 absolute w-full">
      <Navbar />
      </div>
      <p className="absolute bg-red-500 w-full top-[200px]">Transform long, complicated URLs into short, easy-to-share links with just one click. Enhance your online presence and make sharing effortless.</p>
      <div className="absolute flex w-full h-full justify-center items-center z-10">
        <div className=" w-full text-center">
          <Shortener />
        </div>
      </div>
      <img
        src={HeroImg}
        className="md:w-full md:h-[600px] object-cover"
        alt="HeroImg"
        srcset=""
      />
    </div>
  );
};

export default HeroSection;
