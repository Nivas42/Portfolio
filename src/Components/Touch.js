import React from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
const Touch = () => {
  AOS.init({duration:1000})
  return (
    <div className="bg-[#111111] text-white p-2" id="touch">
      <p className="text-[#ff5d56] text-center pt-14 text-3xl">Get in Touch</p>
      <p className="text-[#707070] text-sm text-center md:text-lg pb-4">
        "Connecting hearts and minds, one conversation at a time."
      </p>
      <div className="flex justify-center gap-1 pb-6">
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
      </div>
      <div className=" grid md:grid md:grid-cols-2 md:gap-6">
        <div className="pb-6 md:text-right text-center">
          <input
            placeholder="Your Name"
            type="text"
            className="bg-[#222222] border border-gray-600 p-3 w-60 md:w-[210px] lg:w-[350px]"
          ></input>
        </div>
        <div className="pb-6 md:pb-0 md:text-left text-center">
          <input
            placeholder="Your Email Address"
            type="email"
            className="bg-[#222222] border border-gray-600 p-3 w-60 md:w-[210px] lg:w-[350px]"
          ></input>
        </div>
      </div>
      <div className="pb-6 text-center">
        <input
          placeholder="Subject"
          type="text"
          className="bg-[#222222] border border-gray-600 p-3 w-60 md:w-[450px] lg:w-[730px]"
        ></input>
      </div>
      <div className="pb-6 text-center">
        <textarea
          placeholder="How Can I Help You ?"
          type="text"
          className="bg-[#222222] border border-gray-600 p-3 w-60 h-36 md:w-[450px] lg:w-[730px]"
        ></textarea>
      </div>
      <div className="pb-6 text-center">
        <button className="bg-[#111111] border border-[#ff5d56] p-3 text-[#ff5d56] hover:bg-[#ff5d56] hover:text-white">
          Contact Now
        </button>
      </div>
      <div className="p-7 lg:grid lg:grid-cols-3">
        <div className="bg-[#222222] border border-gray-600 w-auto h-auto text-center mb-5 lg:w-[290px] xl:w-[350px] mx-auto" data-aos="fade-up" >
          <h1 className="p-2">Address</h1>
          <p className="border-b-4 border-[#ff5d56] w-10 mx-auto mb-3"></p>
          <p className="text-sm text-[#707070]">
            Nayaganaipiriyal, Tamilnadu.
          </p>
        </div>
        <div className="bg-[#222222] border border-gray-600 w-auto h-auto text-center mb-5 lg:w-[290px] xl:w-[350px] mx-auto" data-aos="fade-up" data-aos-delay="200" >
          <h1 className="p-2">Phone No.</h1>
          <p className="border-b-4 border-[#ff5d56] w-10 mx-auto mb-3"></p>
          <p className="text-sm text-[#707070] p-2">+91 6383542407</p>
        </div>
        <div className="bg-[#222222] border border-gray-600 w-auto h-auto text-center mb-5 lg:w-[290px] xl:w-[350px] mx-auto" data-aos="fade-up" data-aos-delay="400" >
          <h1 className="p-2">Email</h1>
          <p className="border-b-4 border-[#ff5d56] w-10 mx-auto mb-3"></p>
          <p className="text-sm text-[#707070] p-2">nivasnivi186@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Touch;
