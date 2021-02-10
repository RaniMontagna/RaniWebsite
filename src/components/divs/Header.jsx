import React from "react";
import "./Header.css";

import SvgDivLayoutBottom from "../layout/svgDivLayoutBottom";

function Header() {
  return (
    <div className="header">
      <div className="content">
        <h1> Ranielli Montagna </h1>
        <nav className="nav">
          <li><a href="#about">Sobre</a></li>
          <li>Contato</li>
          <li><a href="#programming">Programação</a></li>
          <li><a href="#games">Jogos</a></li>
        </nav>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default Header;
