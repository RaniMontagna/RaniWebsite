import React from "react";
import "./Intro.css";

import Typewriter from "typewriter-effect";
import logo from "../../images/logo/logoWhite.png";

function Intro() {
  return (
    <div className="intro">
      <div className="nav">
        <nav className="nav">
          <li>
            <a href="#about">SOBRE</a>
          </li>
          <li>
            <a href="#programming">PROGRAMAÇÃO</a>
          </li>
          <li>
            <a href="#design">DESIGN</a>
          </li>
          <li>
            <a href="#games">JOGOS</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </nav>

        <div className="dropdown">
          <button className="dropbtn">MENU</button>
          <div className="dropdown-content">
            <a href="#about">SOBRE</a>
            <a href="#programming">PROGRAMAÇÃO</a>
            <a href="#design">DESIGN</a>
            <a href="#games">JOGOS</a>
            <a href="#contact">CONTATO</a>
          </div>
        </div>
      </div>
      <div className="main">
        <h2>
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("Olá, eu sou")
                .stop()
                .start();
            }}
          />
        </h2>
        <h1>
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(900)
                .changeDelay(50)
                .typeString("Ranielli Montagna")
                .stop()
                .start();
            }}
          />
        </h1>
        <h3>
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .changeDelay(50)
                .typeString("E esse é meu resumo")
                .stop()
                .start();
            }}
          />
        </h3>
      </div>
    </div>
  );
}

export default Intro;
