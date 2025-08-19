import React from "react";
import "./Hero.css";
import images from "../../images/images";
import Button from "../Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero container mx-auto px-4 flex flex-col justify-center items-center gap-5 pt-16 md:pt-20 lg:mt-5"
    >
      <div
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 p-[3px] rounded-full 
        bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] 
        transition-all duration-3000 ease-in-out 
        hover:scale-110 hover:rotate-1 hover:translate-y-[20%] hover:z-50 my-10"
      >
        <img
          className="w-full h-full object-cover rounded-full 
          transition-all duration-1000 ease-in-out 
          hover:brightness-110 hover:contrast-105"
          src={images.VanThao}
          alt="Van Thao"
        />
      </div>

      <h1 className="text-center w-full max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
        <span className="hero-name text-transparent bg-clip-text bg-gradient-to-r from-[#DA7C25] to-[#B923E1]">
          I'm Van Thao
        </span>{" "}
        - FS Web Developer
      </h1>

      <p className="w-full max-w-xl my-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-100">
        I'm a web developer with a passion for creating beautiful and functional websites.
      </p>

      <div className="hero-action flex flex-wrap justify-center items-center gap-4 md:gap-6 text-base sm:text-lg md:text-xl font-medium mb-10">
        <AnchorLink offset={30} href="#contact">
          <Button btn_name="Connect with me" />
        </AnchorLink>
        <div className="hero-resume px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white cursor-pointer hover:border-[#B415FF] transition-all duration-300 ease-in-out">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
