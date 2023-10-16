import React from "react";
import projects from "./Projects";
import { FaGithub } from 'react-icons/fa6';
import { FaEye } from "react-icons/fa";
import AOS from 'aos'
import "aos/dist/aos.css"

const Projectshow = () => {
  AOS.init({duration:2000})
  return (
    <div className="bg-[#151515] text-white pt-10 pb-14 p-5" id="portfolio">
      <div className="">
        <p className="text-[#ff5d56] text-center pt-14 text-3xl">Portfolio</p>
        <p className="text-[#707070] text-sm text-center md:text-lg pb-4">
          "See My Works- I invite you to witness the power of Imagination"
        </p>
        <div className="flex justify-center gap-1 pb-10">
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
          <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project) => {
          return (
            <div className="relative group cursor-pointer sm:w-[400px] sm:h-[200px] md:w-[300px]" >
              <img
              src={project.projects}
              alt="project-img"
              key={project.id}
              data-aos="flip-right"
              data-aos-delay="50"
              className="w-[400px] h-[200px] md:w-[300px] object-cover"
            />
            <h1 className="absolute sm:w-[400px] sm:h-[200px] md:w-[300px]  hover:bg-white hover:bg-opacity-40 top-0 left-0 transition-all duration-75">
              <h1 className="text-lg text-center font-bold text-black opacity-0 group-hover:opacity-100 ">{project.skills}</h1>
              <div className="flex items-center justify-center sm:w-[400px] sm:h-[200px] md:w-[300px] gap-9">
                <a href={project.url} target="_blank" rel="noreferrer">
                  {" "}
                  <FaEye className="text-2xl text-black opacity-0 group-hover:opacity-100" />
                </a>
                <a href={project.git} target="_blank" rel="noreferrer">
                  {" "}
                  <FaGithub className="text-2xl text-black opacity-0 group-hover:opacity-100" />
                </a>
              </div>{" "}
            </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projectshow;
