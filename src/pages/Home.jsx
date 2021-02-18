import React, { useEffect } from "react";

// import Header from "../components/divs/Header";
// import Main from "../components/divs/Main";
import Intro from "../components/divs/Intro";
import About from "../components/divs/About";
import Cv from "../components/divs/Cv";
import DesignerWorks from "../components/divs/DesignerWorks";
import Programming from "../components/divs/Programming";
import Games from "../components/divs/Games";
// import Quote from "../components/divs/Quote";
import Contact from "../components/divs/Contact";
import Footer from "../components/divs/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Home">
      {/* <Header /> */}
      {/* <Main /> */}
      <Intro />
      <About />
      <Cv />
      <DesignerWorks />
      <Programming />
      <Games />
      {/* <Quote /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
