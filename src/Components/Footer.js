import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#151515] text-white" id="contact">
      <div className="text-center pt-16">
        <h1 className="text-3xl">
          <span className="text-[#ff5d56]">NIVI </span>NIVAS
        </h1>
        <p className="text-sm text-[#707070] p-4 lg:w-[900px] mx-auto">
          "A dynamic and driven young developer with a keen eye for design and a
          passion for crafting exceptional digital experiences. coupled with
          proficiency in creating visually appealing designs using Figma, I
          bring a unique blend of technical expertise and creative flair to
          every project I undertake."
        </p>
        <p className="text-sm text-[#707070] p-4">
          Emerging Developer | <span className="text-[#ff5d56]"> Front-End & Back-End </span> | Figma Designer
        </p>
      </div>
      <div className="flex justify-center gap-3">
      <a href="https://www.linkedin.com/in/nivas186"><FaLinkedin className="text-2xl hover:text-[#ff5d56]" /></a>
      <a href="https://github.com/Nivas42"><BsGithub className="text-2xl hover:text-[#ff5d56]" /></a>
      </div>
      <p className="border-b-4 border-[#ff5d56] w-10 mx-auto mt-3 mb-3"></p>
      <div className="flex justify-center gap-1">
        <p className="text-sm text-[#707070]">Copyright &copy; 2023 designedBy Nivas</p>
        <AiOutlineCheckCircle className="text-[#ff5d56] text-2xl" />
      </div>
    </div>
  );
};
export default Footer;
