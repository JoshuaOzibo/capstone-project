import React, { useState } from "react";
import HeroImg from "../assets/pexels-asadphoto-457882.jpg";
import Shortener from "./Shortener";
const HeroSection = () => {
  return (
    <div class="relative w-full overflow-hidden">
      <div className="absolute w-full h-full bg-black opacity-60 z-5"></div>
      <div className="absolute flex w-full h-full justify-center items-center z-10">
        <div className=" w-full  text-center">
          <Shortener />
        </div>
      </div>
      <img
        src={HeroImg}
        className="md:w-full md:h-[600px] sm:h-[70vh] h-[60vh] object-cover"
        alt="HeroImg"
        srcset=""
      />
    </div>
  );
};

export default HeroSection;
