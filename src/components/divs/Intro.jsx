import React from "react";
import "./Intro.css";

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
        <h2>Olá, eu sou</h2>
        <h1>Ranielli Montagna</h1>
        <h3>E esse é meu resumo</h3>
      </div>
    </div>
  );
}

export default Intro;
