import React from 'react'
import { GiDeadEye } from "react-icons/gi";
import { TbWorldCode } from "react-icons/tb";
import { GiPhotoCamera,GiStumpRegrowth } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import AOS from 'aos'
import "aos/dist/aos.css"
const Services = () => {
  AOS.init({duration:1000})
  return (
    <div className='bg-[#151515] text-white' id='services'>
        <div>
        <p className="text-[#ff5d56] text-center pt-10 text-3xl pb-2">My Services</p>
        <p className="text-[#707070] text-sm text-center md:text-lg pb-4">
          "Quality Services delivered with Passion and precision"
        </p>
        <div className="flex justify-center gap-1 pb-10">
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        </div>
        </div>
        <div>
            <div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12' >
            <div className='w-auto h-auto border-2 border-gray-400 border-opacity-10 p-4 text-center bg-[#222222] centre1' data-aos="fade-up">
                <GiDeadEye className='text-[#ff5d56] w-12 h-12 mx-auto '/>
                <p className='text-2xl pt-3'>Web Design</p>
                <p className='text-[#707070] pb-6 pt-5'>"Designing websites that merge aesthetics with functionality."</p>
            </div>
            <div className='w-auto h-auto border-2 border-gray-400 border-opacity-10 p-4 text-center bg-[#222222] centre1' data-aos="fade-up" data-aos-delay="300" >
                <TbWorldCode className='text-[#ff5d56] w-12 h-12 mx-auto '/>
                <p className='text-2xl pt-3'>Web Developer</p>
                <p className='text-[#707070] pb-6 pt-5'>"Turning lines of code into functional and beautiful web experiences."</p>
            </div>
            <div className='w-auto h-auto border-2 border-gray-400 border-opacity-10 p-4 text-center bg-[#222222] centre1' data-aos="fade-up" data-aos-delay="500">
                <GiPhotoCamera className='text-[#ff5d56] w-12 h-12 mx-auto '/>
                <p className='text-2xl pt-3'>Photography</p>
                <p className='text-[#707070] pb-6 pt-5'>"Capturing moments through the lens, blending technical precision with artistic vision."</p>
            </div>
            <div className='w-auto h-auto border-2 border-gray-400 border-opacity-10 p-4 text-center bg-[#222222] centre1' data-aos="fade-up" data-aos-delay="500">
                <GiStumpRegrowth className='text-[#ff5d56] w-12 h-12 mx-auto '/>
                <p className='text-2xl pt-3'>Growth</p>
                <p className='text-[#707070] pb-6 pt-5'>"Unceasingly cultivating technical expertise to fuel my growth as a web developer."</p>
            </div>
            <div className='w-auto h-auto border-2 border-gray-400 border-opacity-10 p-4 text-center bg-[#222222] centre1' data-aos="fade-up" data-aos-delay="700">
                <FaMedal className='text-[#ff5d56] w-12 h-12 mx-auto '/>
                <p className='text-2xl pt-3'>Creative Design</p>
                <p className='text-[#707070] pb-6 pt-5'>"Crafting digital masterpieces with a harmonious blend of creativity and technical precision."</p>
            </div>
            <div className='w-auto h-auto border-2 border-gray-400 border-opacity-10 p-4 text-center bg-[#222222] centre1' data-aos="fade-up" data-aos-delay="900">
                <MdSupportAgent className='text-[#ff5d56] w-12 h-12 mx-auto '/>
                <p className='text-2xl pt-3'>Support</p>
                <p className='text-[#707070] pb-6 pt-5'>"Providing expert technical support to empower seamless user experiences."</p>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Services;