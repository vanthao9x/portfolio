import React from "react";
import images from "../../images/images";

const About = () => {
  const about_skill = "flex items-center gap-6 sm:gap-8 transition duration-300 hover:scale-105 ease-in-out";
  const about_skill_p = "min-w-[120px] sm:min-w-[150px] text-lg sm:text-2xl font-medium";
  const hr_css = "outline-none border-none h-2 rounded-full bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)]";
  const about_achievement = "flex flex-col justify-center items-center gap-2 transition duration-300 hover:scale-105 ease-in-out";

  return (
    <div id="about" className="aboutMe container max-w-screen-xl mx-auto px-4 py-16 flex flex-col items-center gap-16 lg:pt-20">
      
      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">About me</h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            className="w-60 sm:w-72 md:w-80 rounded-3xl border bg-cyan-100 border-neutral-100"
            src={images.vanthao}
            alt="van thao"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-10 w-full">
          
          {/* Paragraphs */}
          <div className="flex flex-col gap-4 text-base sm:text-xl font-medium text-center lg:text-left">
            <p>I&apos;m a web developer with a passion for creating beautiful and functional websites.</p>
            <p>I&apos;m a web developer with a passion for creating beautiful and functional websites.</p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <div className={about_skill}>
              <p className={about_skill_p}>HTML & CSS</p>
              <hr style={{ width: "70%" }} className={hr_css} />
            </div>
            <div className={about_skill}>
              <p className={about_skill_p}>REACT JS</p>
              <hr style={{ width: "85%" }} className={hr_css} />
            </div>
            <div className={about_skill}>
              <p className={about_skill_p}>NODE JS</p>
              <hr style={{ width: "75%" }} className={hr_css} />
            </div>
            <div className={about_skill}>
              <p className={about_skill_p}>JAVASCRIPT</p>
              <hr style={{ width: "100%" }} className={hr_css} />
            </div>
            <div className={about_skill}>
              <p className={about_skill_p}>JAVA</p>
              <hr style={{ width: "65%" }} className={hr_css} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-around gap-8 w-full mt-8">
        <div className={about_achievement}>
          <h1 className="text-5xl font-bold bg-[linear-gradient(270deg,_#DF8908_50.41%,_#B415FF_90%)] bg-clip-text text-transparent">2+</h1>
          <p className="text-xl font-medium text-center">YEARS OF EXPERIENCE</p>
        </div>

        <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

        <div className={about_achievement}>
          <h1 className="text-5xl font-bold bg-[linear-gradient(270deg,_#DF8908_50.41%,_#B415FF_90%)] bg-clip-text text-transparent">5+</h1>
          <p className="text-xl font-medium text-center">PROJECTS COMPLETED</p>
        </div>

        <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

        <div className={about_achievement}>
          <h1 className="text-5xl font-bold bg-[linear-gradient(270deg,_#DF8908_50.41%,_#B415FF_90%)] bg-clip-text text-transparent">5+</h1>
          <p className="text-xl font-medium text-center">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
