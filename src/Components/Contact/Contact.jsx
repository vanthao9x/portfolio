import React from "react";
import Button from "../Button/Button";
import images from "../../images/images"; // Giả sử bạn đã có ảnh tại đây
import { toast } from "react-toastify";

const Contact = () => {
  const contact_detail =
    "flex gap-4 items-center transition duration-300 hover:scale-105 ease-in-out";

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "9c7eff22-f5c2-4034-845f-db5218b53253");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="contact flex flex-col items-center justify-center gap-12 pt-20 px-4 lg:px-20 max-w-screen-xl mx-auto"
    >
      <div className="contact-title flex justify-center relative w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold px-4">
          Get in touch
        </h1>
        {/* <img
          className="absolute bottom-0 right-0 -z-10 w-24 h-24"
          src={images.ss} // Giả sử bạn import đúng ảnh từ `images`
          alt="ss"
        /> */}
      </div>

      <div className="contact-section flex flex-col lg:flex-row gap-12 lg:gap-36 w-full">
        {/* LEFT */}
        <div className="contact-left flex flex-col gap-7 lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-[linear-gradient(270deg,_#DF8908_80%,_#B415FF_100%)] text-transparent bg-clip-text">
            Let’s talk
          </h1>
          <p className="max-w-lg text-neutral-400 text-base sm:text-lg leading-7">
            I'm currently available to talk on new project, so feel free to contact me!
          </p>
          <div className="contact-details flex flex-col gap-6 text-neutral-300 text-base sm:text-lg">
            <div className={contact_detail}>
              {/* Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <p>levanthaolvt228@gmail.com</p>
            </div>
            <div className={contact_detail}>
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <p>+84 38 58 555 33</p>
            </div>
            <div className={contact_detail}>
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p>Đà Nẵng city</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-6 lg:w-1/2 w-full">
          <label className="text-lg sm:text-2xl text-neutral-300 font-medium">
            Your name
          </label>
          <input
            className="w-full h-14 sm:h-16 bg-[#32323c] rounded-lg text-neutral-400 text-base sm:text-xl pl-5 outline-none"
            maxLength={30}
            type="text"
            placeholder="Enter your name ..."
            name="name"
            required
          />
          <label className="text-lg sm:text-2xl text-neutral-300 font-medium">
            Your email
          </label>
          <input
            className="w-full h-14 sm:h-16 bg-[#32323c] rounded-lg text-neutral-400 text-base sm:text-xl pl-5 outline-none"
            maxLength={60}
            type="email"
            placeholder="Enter your email ..."
            name="email"
            required
          />
          <label className="text-lg sm:text-2xl text-neutral-300 font-medium">
            Write your message here
          </label>
          <textarea
            className="w-full border-none p-4 rounded-lg bg-[#32323c] text-neutral-400 text-base sm:text-xl outline-none"
            placeholder="Write your message ..."
            name="message"
            rows="6"
            required
          />
          <button type="submit" className="flex justify-center lg:justify-start w-full ">
            <div className="footer-subscribe text-xl py-3 px-8 sm:py-5 sm:px-12 rounded-full bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)] cursor-pointer transform duration-300 hover:scale-110 text-white text-center">
              <button>Send message</button>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
