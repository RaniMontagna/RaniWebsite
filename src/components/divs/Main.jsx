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
        className="typewriter"
        options={{
          strings: [
            "Olá! Esse sou eu, bem-vindos ao meu site.",
            "Aqui você pode conhecer um pouco mais sobre mim e o que eu faço.",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          pauseFor: 3000,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
}

export default Main;
