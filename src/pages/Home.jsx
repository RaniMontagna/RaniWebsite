import React from "react";

import Header from "../components/divs/Header";
import Main from "../components/divs/Main";
import About from "../components/divs/About";
import Programming from "../components/divs/Programming";
import Games from "../components/divs/Games";
import Quote from "../components/divs/Quote";
import Footer from "../components/divs/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Main />
      <About />
      <Programming />
      <Games />
      <Quote />
      <Footer />
    </div>
  );
}

export default Home;
