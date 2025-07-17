import React from 'react'
import mywork_data from '../../Data/MyWork-data'
const MyWork = () => {
  return (
    <div id="portfolio" className="mywork flex flex-col items-center justify-center gap-20 pt-20 mx-44">
        <div className="mywork-title relative ">
            <h1 className='px-7 text-7xl font-semibold'>My latest work</h1>
            <img className='absolute bottom-0 right-0 -z-10' src="ss" alt="ss" />
        </div>
        <div className="mywork-container grid grid-cols-3 gap-10">
            {mywork_data.map((work, index) => { 
                 return ( 
                    <img className='box-border w-[419px] h-[280px] transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer rounded-2xl
                    hover:border-4 hover:border-[#B415FF] hover:rounded-xl' key={index} src={work.img} alt="" />) 
            })}
        </div>
        <div className="mywork-showmore flex flex-row gap-2 px-10 py-5 rounded-full border-2
         border-white cursor-pointer hover:border-[#B415FF] trasition-all duration-500 ease-in-out hover:gap-5">
           <div >
          Show more</div>
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
  )
}

export default MyWork