import React from "react";
import "./About.css";

import Perfil from "../../../src/images/myPhoto.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="contentTwo">
        <div data-aos="fade-down">
          <img src={Perfil} alt={Perfil} />
        </div>
        <div data-aos="fade-down">
          <h1>PROGRAMADOR FRONT-END</h1>
          <h2>
            <a
              style={{ textDecoration: "none", color: "#1b96bb" }}
              target="_blank"
              rel="noreferrer"
              href="https://pratio.com.br/"
            >
              PRATIO
            </a>{" "}
            - SB SISTEMAS
          </h2>
        </div>
      </div>
      <div className="content">
        <p data-aos="fade-up">
          Me chamo <strong>Ranielli Montagna</strong>, mais conhecido por Rani,
          tenho 19 anos e estou cursando
          <strong> Análise e Desenvolvimento de Sistemas </strong>na UPF
          (Universidade de Passo Fundo) desde 2020/1, criei esse site com o
          intuito de usar meus conhecimentos para evoluir na área de
          desenvolvimento web. Sou apaixonado por informática em geral desde
          pequeno e pretendo melhorar a cada dia mais. Além disso, tenho
          experiências em outros áreas dentro da tecnologia como por exemplo,
          Designer Gráfico e Projetista de Interiores. Esses e outros graças à
          minha passagem de 7 em cursos de informática. Já trabalhei como
          Projetista de Móveis, porém hoje estou no mercado de desenvolvimento
          de software dentro da empresa <strong>SBSistemas</strong> de Marau,
          sou programador front-end!
        </p>
      </div>
    </div>
  );
}

export default About;
