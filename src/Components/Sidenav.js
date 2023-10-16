import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

const Sidenav = ({ sideNav, setSideNav }) => {
  function handleClose() {
    setSideNav(!sideNav);
  }

  return (
    <div>
      <div
        className={
          sideNav
            ? "fixed right-0 h-full top-0 w-3/4 bg-black transition-all duration-700 z-30"
            : "transition-all duration-700  fixed -right-full h-full  top-0  "}>
     {
      sideNav  ? <div >
      <HiMiniXMark onClick={handleClose} className="text-white mt-2 text-3xl"/>
      <div className="text-white text-center list-none mt-5 flex flex-col gap-5 logo">
      <Link to="home"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>HOME</h1>
        </Link>
        <Link to="about"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>ABOUT</h1>
        </Link>
        <Link to="services"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>SERVICES</h1>
        </Link>
        <Link to="resume"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>RESUME</h1>
        </Link>
        <Link to="portfolio"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>PORTFOLIO</h1>
        </Link>
        <Link to="touch"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>TOUCH</h1>
        </Link>
        <Link to="contact"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
         onClick={handleClose}
        >
        <h1>CONTACT</h1>
        </Link>
      </div>
    </div> : ""
     }
      </div>
    </div>
  );
};

export default Sidenav;
