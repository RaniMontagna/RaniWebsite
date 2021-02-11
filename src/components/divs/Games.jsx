import React from "react";
import "./Games.css";

import { Carousel } from "react-bootstrap";

import SvgDivLayoutBottom from "../layout/svgDivLayoutBottom";

function Games() {
  return (
    <div id="games" className="games">
      <div className="content">
        <div className="title">
          <h1 data-aos="fade-up">Jogos</h1>
          <h2 data-aos="fade-down">Meu hobby favorito</h2>
        </div>
        <p data-aos="fade">
          Não poderia fazer um website sobre mim sem falar sobre jogos, eles
          fazem parte de mim desde pequeno quando ganhei meu primeiro
          computador. Desde lá, sempre reservo um momento do meu dia para me
          divertir um pouco (ou passar raiva) jogando. Claro sempre fica mais
          divertido quando se joga com amigos então se você quiser pode me
          chamar.
        </p>
        <h3 data-aos="fade">Meus favoritos:</h3>
        <Carousel data-aos="fade" className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/b0/b7/1f/b0b71f40a83a92a700a82f5907117f2b.jpg"
              alt="Rainbow Six Siege"
            />
            <Carousel.Caption>
              <h2>Rainbow Six Siege</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1335864.jpg"
              alt="Rocket League"
            />

            <Carousel.Caption>
              <h2>Rocket League</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dmarket.com/blog/best-csgo-wallpapers/tercsgo_huc01d3a403c050d47715d6aeed15b344f_839613_1920x1080_resize_q75_lanczos.jpg"
              alt="Counter-Strike: Global Offensive"
            />

            <Carousel.Caption>
              <h2>Counter-Strike: Global Offensive</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default Games;
