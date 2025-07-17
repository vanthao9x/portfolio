import React from 'react'

const Button = ({btn_name}) => {
  return (
    <div className="hero-connect px-5 md:px-12 py-5 md:py-6 rounded-4xl md:rounded-full hover:border-white 
         bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_100%)] 
         cursor-pointer text-white font-semibold
         transition-all duration-500 ease-in-out
         hover:scale-105 hover:brightness-110 ">{btn_name}</div>
  )
}

export default Button