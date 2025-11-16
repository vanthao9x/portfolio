import React from "react";
import Services_data from "../../Data/Services-data";

const Services = () => {
  return (
    <div
      id="services"
      className="services container max-w-screen-xl mx-auto px-4 py-16 flex flex-col items-center gap-16 lg:pt-20"
    >
      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold px-4">Services</h1>
        {/* <img className="absolute bottom-0 right-0 -z-10 hidden sm:block" src="aa" alt="aa" /> */}
      </div>

      {/* Services Grid */}
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full">
        {Services_data.map((service, index) => (
          <div
            key={index}
            className="services-format flex flex-col justify-center gap-4 md:gap-5 p-6 sm:p-10 md:p-14 rounded-lg border border-neutral-200 transition-all duration-300 ease-in-out cursor-pointer 
              hover:border-[#ff00ff] hover:bg-[linear-gradient(45deg,_#3f0028,#582300)] hover:scale-105"
          >
            <p className="text-xl sm:text-2xl font-semibold">{service.s_no}</p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-[linear-gradient(270deg,_#DF8908_50%,_#B415FF_100%)] text-transparent bg-clip-text">
              {service.s_name}
            </p>
            <p className="text-base sm:text-lg text-neutral-100 leading-relaxed">
              {service.s_desc}
            </p>
            <div className="services-readmore flex gap-2 items-center mt-3 text-white hover:text-fuchsia-400 transition-colors duration-200">
              <p className="text-sm sm:text-base">Read More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
