import React from "react";
import { BiSolidBriefcase } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import AOS from 'aos'
import "aos/dist/aos.css"
const Resume = () => {
  AOS.init({duration:1000})
  return (
    <div className="bg-[#111111] text-white" id="resume">
      <p className="text-[#ff5d56] text-center pt-10 text-3xl pb-2">
        My Resume
      </p>
      <p className="text-[#707070] text-sm text-center md:text-lg pb-4">
        "Dedicated to continuous self-improvement and professional growth."
      </p>
      <div className="flex justify-center gap-1 pb-10">
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
        <p className="w-2 h-2 rounded-full bg-[#ff5d56]"></p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6">
        <div data-aos="fade-right">
          <div className="text-white w-48 h-12 flex bg-[#ff5d56] text-2xl p-2 ">
            <FaGraduationCap className="mx-auto my-auto" />
            <h1 className="mx-auto my-auto">EDUCATION</h1>
          </div>
          <div className="p-5">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#ff5d56]"></div>
                <time class="mb-1 text-sm font-normal leading-none text-[#ff5d56]">
                  2016-2017
                </time>
                <h3 class="text-lg font-semibold text-white">
                  Raja Vignesh Hr. Sec. School, Melamathur-SSLC
                </h3>
                <p class="mb-4 text-base font-normal text-[#707070]">
                  During my time at Raja Vignesh Hr. Sec. School, I achieved an
                  impressive academic record with a final percentage of 95.4%.
                  This institution provided me with a strong educational
                  foundation and shaped my character in various ways.
                </p>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#ff5d56]"></div>
                <time class="mb-1 text-sm font-normal leading-none text-[#ff5d56]">
                  2018-2019
                </time>
                <h3 class="text-lg font-semibold  dark:text-white">
                  Raja Vignesh Hr. Sec. School, Melamathur-HSC
                </h3>
                <p class="text-base font-normal text-[#707070]">
                  My time at Raja Vignesh Hr. Sec. School was instrumental in
                  preparing me for future academic.I achieved an impressive
                  academic record with a final percentage of 95.4%. The strong
                  academic performance I achieved during this period is a
                  testament to my commitment to education and my ability to
                  excel in a rigorous learning environment.
                </p>
              </li>
              <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#ff5d56]"></div>
                <time class="mb-1 text-sm font-normal leading-none text-[#ff5d56]">
                  2019-2023
                </time>
                <h3 class="text-lg font-semibold  dark:text-white">
                  Government College of Engineering, Bargur- B.E
                </h3>
                <p class="text-base font-normal text-[#707070]">
                  After i completed my school education, My journey at
                  Government College of Engineering from 2019 to 2023 was a
                  transformative experience that greatly enriched my knowledge
                  and personal growth. Graduating with a CGPA of 8.4, I am proud
                  to share the highlights of my college education.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div data-aos="fade-up"> 
          <div className="text-white w-48 h-12 flex bg-[#ff5d56] text-2xl p-2 ">
            <BiSolidBriefcase className="mx-auto my-auto" />
            <h1 className="mx-auto my-auto">EXPERIENCE</h1>
          </div>
          <div>
            <div className="p-5">
              <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4 ">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#ff5d56]"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-[#ff5d56]">
                    2023-present
                  </time>
                  <h3 class="text-lg font-semibold text-white">
                    Web Developer
                  </h3>
                  <p class="mb-4 text-base font-normal text-[#707070]">
                    During my academic journey, I dedicated myself to mastering
                    essential web development technologies and principles. I
                    have a solid understanding of HTML, CSS, JavaScript, and
                    responsive web design, allowing me to build websites that
                    are not only visually appealing but also functional across
                    various devices.
                  </p>
                </li>
                <li class="mb-10 ml-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#ff5d56]"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-[#ff5d56]">
                    2023-present
                  </time>
                  <h3 class="text-lg font-semibold  dark:text-white">
                    UI/UX Design
                  </h3>
                  <p class="text-base font-normal text-[#707070]">
                    As a passionate and dedicated UI/UX designer, I am excited
                    to showcase my early journey in the field of user interface
                    and user experience design. Despite being a fresher, my
                    enthusiasm for creating intuitive and visually appealing
                    digital experiences has driven me to embark on a path of
                    continuous learning and skill development.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
