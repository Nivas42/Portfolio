import Typed from "react-typed";
import pdf from '../Components/nivasresume.pdf'
function Header() {
  return (
    <div className="pt-28 h-[600px] background text-white  bg-cover bg-no-repeat md:bg-center" id="home">
      <div className="p-4 ">
        <p className=" md:text-2xl mb-3"> Hi There! I'm</p>
        <Typed
                strings={[
                  "Web Developer",
                  "Full-Stack Developer",
                  "UI/UX Designer",
                ]}
                typeSpeed={50}
                backSpeed={25}
                loop
                className="text-3xl md:text-5xl lg:text-6xl"
                />
           
        <p className="text-sm opacity-50 mt-7 mb-7 md:w-[500px] lg:w-[600px]">
          Seeking a Full Stack Developer role in a reputable organization where
          I can learn new skills, expand my knowledge, and leverage my
          learnings.
        </p>
        <a href={pdf} target="_blank" rel="noreferrer">
        <button className="text-white text-sm w-36 h-12 mt-9 p-3 border-2 border-white rounded hover:bg-white hover:text-black">
          Download CV
        </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
