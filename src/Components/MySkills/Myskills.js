import React from "react";
import { GiFallingStar } from "react-icons/gi";
import skills from "./MyskillList";
import AOS from 'aos'
import "aos/dist/aos.css"
const Myskills = () => {
  AOS.init({duration:2000});
  return (
    <div className="bg-[#111111]  text-white pb-14">
      <div className="text-white w-48 h-12 flex mx-auto bg-[#ff5d56] text-2xl p-2 ">
        <GiFallingStar className="mx-auto my-auto" />
        <h1 className="mx-auto my-auto">MY SKILLS</h1>
      </div>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 place-items-center place-content-center mt-10" >
        {skills.map((skill) => {
          return (
            <img
              src={skill.skills}
              alt="skill-img"
              key={skill.id}
              data-aos="flip-up"
              data-aos-delay="200"
              className="w-16 h-16 md:w-24 md:h-24"
            />
          );
        })}
      </div>
    </div>
  );
};
export default Myskills;
