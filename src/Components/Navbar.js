import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-scroll";
function Navbar({ handleSideNav }) {
  return (
    <div className="logo flex justify-between fixed z-10 w-full  p-4 bg-black bg-opacity-70 text-white">
      <h1 className="uppercase cursor-pointer text-3xl">
        <span className="text-[#ff5d56] uppercase">Nivi</span> Nivas
      </h1>
      <div>
        <TbMenuDeep onClick={handleSideNav} className="lg:hidden cursor-pointer text-3xl" />
      </div>
      <div className="uppercase  list-none hidden  lg:flex gap-5 cursor-pointer">
      <Link to="home"
         spy={true} 
         smooth={true} 
         hashSpy={true}
         duration={1000} 
        >
        <h1>HOME</h1>
        </Link>
        <Link to="about"
         spy={true} 
         smooth={true} 
         hashspy={true}
         duration={1000} 
        >
        <h1>ABOUT</h1>
        </Link>
        <Link to="services"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
        >
        <h1>SERVICES</h1>
        </Link>
        <Link to="resume"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
        >
        <h1>RESUME</h1>
        </Link>
        <Link to="portfolio"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
        >
        <h1>PORTFOLIO</h1>
        </Link>
        <Link to="touch"
         spy={true} 
         smooth={true} 
         hashspy={true}
         duration={1000} 
        >
        <h1>TOUCH</h1>
        </Link>
        <Link to="contact"
         spy={true} 
         smooth={true} 
         hashspy={true} 
         duration={1000} 
        >
        <h1>CONTACT</h1>
        </Link>
      </div>
    </div>
    
  );
}

export default Navbar;
