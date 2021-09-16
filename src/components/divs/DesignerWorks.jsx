import React from "react";
import "./DesignerWorks.css";

import GnaDesigner from "../../images/design/GnaLogo.webp";
import CopoBC from "../../images/design/Copo-BailaConmigo.webp";
import PerfilR6 from "../../images/design/perfilPhotoR6.webp";
import LogoAlpha from "../../images/design/logo_alphafragrance.webp";

import SvgDivLayoutBottom from "../layout/svgDivLayoutBottom";

function DesignerWorks() {
  return (
    <div className="designerWorks" id="design">
      <div className="content">
        <h1 data-aos="fade-down">Alguns trabalhos de design feitos por mim:</h1>
        <p data-aos="fade-up">
          Faço desde simples logos até mesmo cartazes de festas
        </p>

        <div className="row1">
          <img
            data-aos="fade-up"
            src={GnaDesigner}
            alt="GnaLogo"
            style={{ width: "300px", height: "300px" }}
          />
          <img
            data-aos="fade-up"
            src={CopoBC}
            alt="CopoBC"
            style={{ width: "300px", height: "300px" }}
          />
          <img
            data-aos="fade-up"
            src={PerfilR6}
            alt="perfilPhotoR6"
            style={{ width: "300px", height: "300px" }}
          />
          <img
            data-aos="fade-up"
            src={LogoAlpha}
            alt="AlphaFragranceLogo"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default DesignerWorks;
