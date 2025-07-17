import React from "react";
import Services_data from "../../Data/Services-data";

const Services = () => {
  return (
    <div id="services" className="services flex flex-col items-center justify-center gap-20 pt-20 mx-44">
      <div className="services-title relative ">
        <h1 className="px-7 text-7xl font-semibold">Services</h1>
        <img className="absolute bottom-0 right-0 -z-10" src="aa" alt="aa" />
      </div>
      <div className="services-container grid grid-cols-3 gap-10 mb-20">
        {Services_data.map((service, index) => {
          return (
            <div
              key={index}
              className="services-format flex flex-col justify-center gap-5 p-14 rounded-lg border-2 border-neutral-100 transition-all duration-400 ease-in-out cursor-pointer 
              hover:border-2 hover:border-[#ff00ff] hover:bg-[linear-gradient(45deg,_#3f0028,#582300)] hover:scale-105 "
            >
              <p className="text-3xl font-semibold">{service.s_no}</p>
              <p className="text-4xl font-bold bg-[linear-gradient(270deg,_#DF8908_50%,_#B415FF_100%)] text-transparent bg-clip-text">{service.s_name}</p>
              <p className="text-xl text-neutral-100 leading-10 max-w-xs">{service.s_desc}</p>
              <div className="services-readmore flex gap-5 items-center mt-5">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
