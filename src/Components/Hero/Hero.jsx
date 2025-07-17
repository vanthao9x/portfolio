import React from "react";
import "./Hero.css";
import images from "../../images/images";
import Button from "../Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero flex flex-col justify-center items-center gap-5 md:pt-20 lg:mt-5">
      <div
        className="w-64 h-64 p-[3px] rounded-full 
             bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] 
             transition-all duration-3000 ease-in-out 
             hover:scale-200 hover:rotate-1 hover:translate-y-[50%] hover:z-50 my-10"
      >
        <img
          className="w-full h-full object-cover rounded-full 
               transition-all duration-1000 ease-in-out 
               hover:brightness-110 hover:contrast-105"
          src={images.VanThao}
          alt="hình ảnh"
        />
      </div>

      <h1 className="text-center w-[90%] md:w-[90%] text-5xl md:text-7xl font-semibold"><span className="hero-name">I'm Van Thao</span> - FS Web Developer</h1>
      <p className="w-[60%] my-2 md:my-0 md:w-1/2 text-center text-lg  md:text-2xl leading-8  md:leading-10">
        I'm a web developer with a passion for creating beautiful and functional websites.
      </p>
      <div className="hero-action flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-medium mb-12">
        <AnchorLink className='' offset={30} href='#contact'><Button btn_name="Connect with me"/></AnchorLink>
        <div className="hero-resume px-9 md:px-12 py-5 md:py-6 rounded-4xl md:rounded-full border-2
         border-white cursor-pointer hover:border-[#B415FF] trasition-all duration-300 ease-in-out">
          My resume</div>
      </div>
    </div>
  );
};

export default Hero;
