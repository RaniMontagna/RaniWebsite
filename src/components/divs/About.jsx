import React from "react";
import "./About.css";

import SvgDivLayoutBottom from "../layout/svgDivLayoutBottom";

function About() {
  return (
    <div id="about" className="about">
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
          minha passagem de 7 em cursos de informática. No momento estou
          trabalhando como Projetista de Móveis, porém meu objetivo é com que ao
          passar dos semestres da faculdade eu consiga entrar no mercado de
          trabalho de softwares ou algo semelhante.
        </p>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default About;
