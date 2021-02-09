import React from "react";

import Header from "../components/divs/Header";
import Main from "../components/divs/Main";
import About from "../components/divs/About";
import Programming from "../components/divs/Programming";
import Games from "../components/divs/Games";

function Home() {
  return (
    <div className="Home">
      <Header />

      <Main />

      <About />

      <Programming />

      <Games />
    </div>
  );
}

export default Home;
