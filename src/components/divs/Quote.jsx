import React from "react";
import "./Quote.css";

function Quote() {
  return (
    <div className="quote">
      <blockquote>
        <p data-aos="fade">
          Daqui a vinte anos, você estará mais desapontado com as coisas que
          você não fez do que com aquelas que você fez, então desatraque e
          navegue para longe do porto seguro, aproveite os ventos da troca em
          seu caminho. Explore, sonhe, descubra.
        </p>
        <footer data-aos="fade" className="blockquote-footer">
          <strong>Mark Twain</strong>, escritor e humorista americano (1835 -
          1910)
        </footer>
      </blockquote>
    </div>
  );
}

export default Quote;
