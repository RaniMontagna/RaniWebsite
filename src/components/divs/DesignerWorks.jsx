import React from "react";
import "./DesignerWorks.css";

import GnaDesigner from "../../images/design/GnaLogo.webp";
import CopoBC from "../../images/design/Copo - BailaConmigo.webp";
import PerfilR6 from "../../images/design/perfilPhotoR6.webp";
import LogoAlpha from "../../images/design/logo_alphafragrance.webp";

import SvgDivLayoutBottom from "../layout/svgDivLayoutBottom";

function DesignerWorks() {
  return (
    <div className="designerWorks">
      <div className="content">
        <h1> Alguns trabalhos de design feitos por mim: </h1>
        <p> Faço desde simples logos até mesmo cartazes de festas</p>

        <div className="row1">
          <img data-aos="fade-up" src={GnaDesigner} alt="GnaLogo" />
          <img data-aos="fade-up" src={CopoBC} alt="CopoBC" />
          <img data-aos="fade-up" src={PerfilR6} alt="perfilPhotoR6" />
          <img data-aos="fade-up" src={LogoAlpha} alt="AlphaFragranceLogo" />
        </div>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default DesignerWorks;
