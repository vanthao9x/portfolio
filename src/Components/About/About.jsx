import React from "react";
import images from "../../images/images";
const About = () => {
    const about_skill = 'flex gap-12 items-center transition duration-300 hover:scale-110 hover:duration-300 ease-in-out';
    const about_skill_p = 'min-w-[150px] text-2xl font-medium';
    const hr_css = 'outline-none border-none w-1/2 h-2 rounded-full bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)]';
    const about_achievement = ' flex flex-col justify-center items-center gap-2 pb-5 transition duration-500 hover:scale-110 hover:duration-500 ease-in-out';
  return (
    <div id="about" className="aboutMe flex flex-col items-center justify-center gap-20 pt-20 mx-40">
      <div className="about-title relative">
        <h1 className="py-0 px-8 text-7xl font-semibold">About me</h1>
        {/* <img className="absolute top-0 right-0 -z-10" src="ss" alt="ss" /> */}
      </div>
      <div className="about-section flex gap-20">
        <div className="about-left">
          <img className="w-80 rounded-3xl border bg-cyan-100 border-neutral-100" src={images.vanthao} alt="hinh anh" />
        </div>
        <div className="about-right flex flex-col gap-20">
            <div className="about-para flex flex-col gap-5 text-2xl font-medium">
              <p>
                I'm a web developer with a passion for creating beautiful and functional websites.
              </p>
              <p>I'm a web developer with a passion for creating beautiful and functional websites.</p>
            </div>
            <div className="about-skills flex flex-col gap-5">
                <div className={about_skill}><p className={about_skill_p}>HTML & CSS</p>
                    <hr style={{width: '70%'}} className={hr_css }/></div>
                <div className={about_skill}><p className={about_skill_p}>REACT JS</p>
                    <hr style = {{width: '85%'}} className={hr_css}/></div>
                <div className={about_skill}><p className={about_skill_p}>NODE JS</p>
                    <hr style = {{width: '75%'}} className={hr_css}/></div>
                <div className={about_skill}><p className={about_skill_p}>JAVASCRIPT</p>
                    <hr style = {{width: '100%'}} className={hr_css}/></div>
                <div className={about_skill}><p className={about_skill_p}>JAVA</p>
                    <hr style = {{width: '65%'}} className={hr_css}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements flex flex-row w-[80%] justify-around mb-20 h-5">
        <div className={about_achievement} >
            <h1 className="text-6xl font-bold bg-[linear-gradient(270deg,_#DF8908_50.41%,_#B415FF_90%)] bg-clip-text text-transparent">2+</h1>
            <p className="text-2xl font-medium">YEARS OF EXPERIENCE</p>
        </div>
            <hr className="w-px h-10 bg-gray-300 border-0"/> 
        <div className={about_achievement}>
            <h1 className="text-6xl font-bold bg-[linear-gradient(270deg,_#DF8908_50.41%,_#B415FF_90%)] bg-clip-text text-transparent">5+</h1>
            <p className="text-2xl font-medium">PROJECTS COMPLETED</p>
        </div>
            <hr className="w-px h-10 bg-gray-300 border-0"/>
        <div className={about_achievement}>
            <h1 className="text-6xl font-bold bg-[linear-gradient(270deg,_#DF8908_50.41%,_#B415FF_90%)] bg-clip-text text-transparent">5+</h1>
            <p className="text-2xl font-medium">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
