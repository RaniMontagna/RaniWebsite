import React from "react";
import "./Cv.css";

import ProgressBar from "@ramonak/react-progress-bar";

import { Button } from "react-bootstrap";

function Cv() {
  return (
    <div className="cv">
      <h1 data-aos="fade-down">
        Eu prezo por sempre estar em constante desenvolvimento, então sempre
        estou estudando para melhorar a mim mesmo.
      </h1>
      <div>
        <p data-aos="fade-up">
          Como disse anteriormente tenho conhecimento em diversas áreas da
          tecnologia, nesse gráfico abaixo coloquei minha opinião sobre meus
          conhecimentos.
        </p>
      </div>
      <div>
        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          ReactJS
        </h5>
        <ProgressBar completed={50} bgcolor="#18ABBF" />
        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          Formatação
        </h5>
        <ProgressBar completed={90} bgcolor="#18ABBF" />
        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          Photoshop
        </h5>
        <ProgressBar completed={80} bgcolor="#18ABBF" />
        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          Design de Interiores
        </h5>
        <ProgressBar completed={100} bgcolor="#18ABBF" />
      </div>
      <Button
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        className="button"
        variant="outline-info"
      >
        Baixar CV
      </Button>{" "}
    </div>
  );
}

export default Cv;
