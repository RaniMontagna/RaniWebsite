import React from "react";
import "./Main.css";

import myPhoto from "../../images/myPhoto.jpg";
import { Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div className="main">
      <Image src={myPhoto} roundedCircle />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString("Olá! Esse sou eu, bem-vindos ao meu site!")
            .stop()
            .start();
        }}
      />
    </div>
  );
}

export default Main;
