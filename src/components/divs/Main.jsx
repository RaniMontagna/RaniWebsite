import React from "react";
import "./Main.css";

import myPhoto from "../../images/myPhoto.jpg"
import { Image } from 'react-bootstrap';

function Main() {
  return (
    <div className="main">
      <Image src={myPhoto} roundedCircle />
      <h1>Olá! Esse sou eu, bem-vindos ao meu site.</h1>
      <h2>Aqui você pode conhecer um pouco mais sobre mim e o que eu faço.</h2>

    </div>
  );
}

export default Main;
