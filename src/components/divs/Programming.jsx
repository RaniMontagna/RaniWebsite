import React from "react";
import ImgMediaCard from "../layout/Card";
import "./Programming.css";

function Programming() {
  return (
    <div id="programming" className="programming">
      <h1 data-aos="zoom-in">Programação</h1>
      <h2 data-aos="zoom-in">Estou focado em aprender nesse momento o frontend, principalmente:</h2>
      <div className="cards">
        <ImgMediaCard
          image="/images/programming/reactJS.webp"
          title="ReactJS"
          text="O React é uma biblioteca JavaScript de código aberto com foco em
          criar interfaces de usuário em páginas web. É mantido pelo
          Facebook, Instagram, outras empresas e uma comunidade de
          desenvolvedores individuais. É utilizado nos sites da Netflix,
          Imgur, Airbnb, Walmart e outros."
          link="https://pt-br.reactjs.org"
        />
        <ImgMediaCard
          image="/images/programming/postgreSQL.webp"
          title="PostgreSQL"
          text="PostgreSQL é um sistema de banco de dados poderoso e em código
          aberto para Windows, Mac e Linux. Ele possui mais de 15 anos de
          desenvolvimento ativo e uma arquitetura que ganhou uma forte
          reputação devido a sua estabilidade e integridade de dados."
          link="https://www.postgresql.org"
        />
        <ImgMediaCard
          image="/images/programming/css.webp"
          title="CSS"
          text="O CSS é uma linguagem de folha de estilo composta por “camadas”,
          criado com o propósito de estilizar as páginas HTML, ou seja,
          definir a aparência das páginas, para deixá-las visualmente mais
          bonitas e agradáveis, podendo alterar a fonte, cor, layout e muito mais."
          link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
        />
      </div>
    </div>
  );
}

export default Programming;
