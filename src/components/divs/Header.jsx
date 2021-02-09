import React from "react";
import "./Header.css";

import SvgDivLayoutBottom from "../layout/svgDivLayoutBottom";

function Header() {
  return (
    <div className="header">
      <div className="content">
        <h1> Ranielli Montagna </h1>
        <nav className="nav">
          <li>Sobre</li>
          <li>Contato</li>
        </nav>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default Header;
