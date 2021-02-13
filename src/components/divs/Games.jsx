import React from "react";
import "./Games.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <div className="carouselDiv">
          <Carousel autoplay showThumbs={false} showStatus={false}>
            <div>
              <img src="/images/games/RainbowSix.webp" alt="RainbowSix" />
              <p className="legend">Rainbow Six Siege</p>
            </div>
            <div>
              <img src="/images/games/RocketLeague.webp" alt="RocketLeague" />
              <p className="legend">Rocket League</p>
            </div>
            <div>
              <img src="/images/games/CsGo.webp" alt="CsGo" />
              <p className="legend">Counter-Strike: Global Offensive</p>
            </div>
            <div>
              <img src="/images/games/KingdomTwoCrowns.webp" alt="KingdomTwoCrowns" />
              <p className="legend">Kingdom Two Crowns</p>
            </div>
          </Carousel>
        </div>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default Games;
