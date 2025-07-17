import React from "react";
import images from "../../images/images";

const Footer = () => {
  return (
    <div className="footer flex flex-col gap-7 my-12 mx-44">
      <div className="footer-top flex flex-row justify-between">
        <div className="footer-top-left flex flex-col items-center">
          <img className="w-40" src={images.logo} alt="sd" />
          <p className="text-xl max-w-[400px]">
            I am a web developer from VietNam
          </p>
        </div>
        <div className="footer-top-right flex items-center gap-8">
          <div className="footer-email-input flex gap-7 py-5 px-7 rounded-full pr-20 bg-[#32323B]  hover:border-2 hover:border-white transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a0a0a0"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              className="outline-none border-none bg-transparent text-[#a0a0a0] text-xl"
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="footer-subscribe text-xl py-5 px-12 rounded-full bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)] cursor-pointer transform duration-300 hover:scale-110">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex justify-between text-xl">
        <p className="footer-bottom-left">
          @ 2025 Lê Văn Thảo. All right reserved
        </p>
        <div className="footer-bottom-right flex gap-12 mb-12 ">
          <p>Term of Services</p>
          <p>Provacy Police</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
