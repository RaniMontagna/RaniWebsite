import React from "react";
import ImgMediaCard from "../layout/Card";
import "./Programming.css";

function Programming() {
  return (
    <div id="programming" className="programming">
      <h1 data-aos="zoom-in">Programação</h1>
      <h2 data-aos="zoom-in">Foco dos meus estudos e aprendizagem:</h2>
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
          image="/images/programming/flutter.webp"
          title="Flutter"
          text="Flutter é um UI toolkit do Google para criar aplicativos bonitos e nativos compilados 
          para dispositivos móveis, Web e desktop a partir de uma única base de código. Flutter possui uma porção 
          de widgets que nos permite criar o layout do app muito facilmente."
          link="https://flutter.dev/"
        />
        <ImgMediaCard
          image="/images/programming/golang.webp"
          title="Go"
          text="O Golang é uma linguagem de programação de código aberto criada pelo Google, com foco principal na produtividade.
          Sendo uma linguagem compilada, altamente escalável e que se autodefine como simplista, tendo em vista 
          que facilita a criação de softwares simples."
          link="https://golang.org/"
        />
      </div>
    </div>
  );
}

export default Programming;
