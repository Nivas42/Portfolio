import { useState } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Resume from "./Components/Resume";
import Touch from "./Components/Touch";
import Footer from "./Components/Footer";
import Myskills from "./Components/MySkills/Myskills";
import Projectshow from "./Components/Projects/Projectshow";
function App() {

  const [sideNav,setSideNav] = useState(false)

  function handleSideNav () {
    setSideNav(!sideNav)
  }

  return (
    <div>
      <Navbar handleSideNav={handleSideNav} />
      <Sidenav sideNav={sideNav} setSideNav={setSideNav}/>
      <Header />
      <Section/>
      <Services/>
      <Resume/>
      <Myskills/>
      <Projectshow/>
      <Touch/>
      <Footer/>
    </div>
  );
}

export default App;
