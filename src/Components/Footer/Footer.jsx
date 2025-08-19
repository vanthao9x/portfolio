import React from "react";
import images from "../../images/images";

const Footer = () => {
  return (
    <div className="footer flex flex-col gap-7 my-12 px-4 md:px-10 lg:px-20">
      {/* Top Section */}
      <div className="footer-top flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="footer-top-left flex flex-col items-center md:items-start text-center md:text-left">
          <img className="w-40" src={images.logo} alt="Logo" />
          <p className="text-xl max-w-[400px] text-[#a0a0a0]">
            I am a web developer from VietNam
          </p>
        </div>

        {/* Right */}
        <div className="footer-top-right flex flex-col gap-4 items-center md:flex-row md:items-center md:justify-end md:gap-6 w-full md:w-auto">
          {/* Input */}
          <div className="footer-email-input flex w-full md:w-auto items-center gap-4 py-4 px-5 rounded-full bg-[#32323B] hover:border-2 hover:border-white transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a0a0a0"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              className="flex-1 outline-none border-none bg-transparent text-[#a0a0a0] text-base sm:text-xl"
              type="email"
              placeholder="Enter your email..."
            />
          </div>

          {/* Subscribe Button */}
          <div className="footer-subscribe text-xl py-3 px-8 sm:py-5 sm:px-12 rounded-full bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)] cursor-pointer transform duration-300 hover:scale-110 text-white text-center">
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <hr className="border-gray-500" />

      {/* Bottom Section */}
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center text-center text-xl gap-4 text-[#a0a0a0]">
        <p className="footer-bottom-left">
          © 2025 Lê Văn Thảo. All rights reserved.
        </p>
        <div className="footer-bottom-right flex flex-col sm:flex-row gap-4 sm:gap-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
