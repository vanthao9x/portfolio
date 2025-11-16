import React from 'react';
import mywork_data from '../../Data/MyWork-data';

const MyWork = () => {
  return (
    <div
      id="portfolio"
      className="mywork container max-w-screen-xl mx-auto px-4 py-16 flex flex-col items-center gap-16 lg:pt-20"
    >
      {/* Title */}
      <div className="mywork-title relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold px-4">
          My latest work
        </h1>
        <img
          className="absolute bottom-0 right-0 -z-10 hidden sm:block"
          src="ss"
          alt=""
        />
      </div>

      {/* Work Images Grid */}
      <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.img}
            alt={`Work ${index}`}
            className="w-full h-auto rounded-2xl cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:border-4 hover:border-[#B415FF]"
          />
        ))}
      </div>

      {/* Show More Button */}
      <div
        className="mywork-showmore flex items-center gap-x-2 px-6 py-3 rounded-full border-2 border-white 
        text-white font-medium text-base md:text-lg cursor-pointer transition-all duration-300 ease-in-out 
        hover:gap-x-4 hover:border-[#B415FF]"
      >
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 md:w-6 md:h-6"
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
};

export default MyWork;
