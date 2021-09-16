import React from "react";
import "./Games.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
        <div className="carouselDiv" style={{ maxWidth: "1000px" }}>
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            items={[
              {
                original: "/images/games/RainbowSix.webp",
                thumbnail: "/images/games/RainbowSix.webp",
                description: "Rainbow Six Siege",
                originalHeight: 500,
                originalWidth: 1280,
              },
              {
                original: "/images/games/RocketLeague.webp",
                thumbnail: "/images/games/RocketLeague.webp",
                description: "Rocket League",
                originalHeight: 500,
                originalWidth: 1280,
              },
              {
                original: "/images/games/CsGo.webp",
                thumbnail: "/images/games/CsGo.webp",
                description: "Counter-Strike: Global Offensive",
                originalHeight: 500,
                originalWidth: 1280,
              },
            ]}
          />
        </div>
      </div>
      <SvgDivLayoutBottom />
    </div>
  );
}

export default Games;
