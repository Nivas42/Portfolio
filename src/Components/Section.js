import React from "react";
import About from "../images/aboume.png";
import { SlCalender } from "react-icons/sl";
import { AiFillFlag } from "react-icons/ai";
import { FaPhoenixFramework } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import AOS from 'aos'
import "aos/dist/aos.css"


const Section = () => {
  AOS.init({duration:1000});
  return (
    <div className="bg-[#111111] text-white" id="about">
      <div>
        <p className="text-[#ff5d56] text-center pt-14 text-3xl">About Me</p>
        <p className="text-[#707070] text-sm text-center md:text-lg pb-4">
          "Professional Profile- There Is All About me"
        </p>
        <div className="flex justify-center gap-1 pb-2">
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        </div>
        <div className="flex flex-col lg:flex-row p-7 lg:gap-10 justify-center items-center">
          <div data-aos="fade-right"  className=" border-[1px] border-gray-100 border-opacity-10 md:w-[680px] lg:w-[200%] lg:h-[500px] xl:h-[600px] xl:w-[80%] mx-auto mb-7">
            <img
              alt="about"
              src={About}
              className=" relative bottom-2 right-2 md:w-[680px] lg:w-[100%] lg:h-[500px] object-cover xl:h-[600px] xl:w-[100%]"
            />
          </div>
          <div className="" data-aos="fade-up">
          <div className="flex flex-col w-full justify-center ">
            <p className="text-2xl pb-2 text-left pl-5 ">
              I'm Nivi Nivas
            </p>
            <p className="border-b-4 border-[#ff5d56] w-10 mb-3 ml-5"></p>
            <div className="text-sm text-[#707070]">
            <p className="pt-3 p-5">
              Hello!,I hail from Nayaganaipiriyal, a picturesque town in
              TamilNadu.Growing up in this serene environment instilled in me a
              deep appreciation for nature's beauty and tranquility.
            </p>
            <p className="pt-2 p-5 ">
              I earned my Bachelor's degree in Electronics and Communication
              Engineering from Government College of Engineering located in
              Bargur,TamilNadu. During my time there, I gained a deep
              understanding of software development fundamentals, data
              structures, and algorithms.Beyond coding, I have a passion for
              UI/UX Design, Photo and Videography, Game development. Whether
              it's Photography, Gaming, or Design, I believe in maintaining a
              healthy work-life balance and exploring diverse interests that
              contribute to my personal and professional growth.
            </p>
            <p className="pt-2 p-5">
              Beyond coding, I have a passion for UI/UX Design, Photo and
              Videography, Game development. Whether it's Photography, Gaming,
              or Design, I believe in maintaining a healthy work-life balance
              and exploring diverse interests that contribute to my personal and
              professional growth.
            </p>
            </div>
          </div>
          <div className=" md:flex md:justify-around ">
            <div className="">
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <SlCalender className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Date of Birth:</span>11/03/2002</p>
              </div>
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <AiFillFlag className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Nationality:</span>Indian</p>
              </div>
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <FaPhoenixFramework className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Freelance:</span>Available</p>
              </div>
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <BiSolidPhoneCall className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Phone:</span>+91 6383542407</p>
              </div>
            </div>
            <div className="">
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <MdEmail className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Email:</span>nivasnivi186@gmail.com</p>
              </div>
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <FaMapMarkerAlt className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Address:</span>Nayaganaipiriyal,<br/> TamilNadu</p>
              </div>
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <TbWorld className="text-[#ff5d56] h-6 w-6" />
                <p><span className="font-bold">Spoken:</span>English,Tamil</p>
              </div>
              <div className="text-sm text-[#707070] flex gap-1 pb-2 ml-4">
                <BsLinkedin className="text-[#ff5d56] h-[25px] w-[25px]" />
                <a href="https://www.linkedin.com/in/nivas186" rel="noreferrer" target="_blank" ><span className="font-bold">LinkedIn:</span>nivas186</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
