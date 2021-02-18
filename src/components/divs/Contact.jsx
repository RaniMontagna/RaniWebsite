import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1>
          Entre <strong> em contato </strong>
        </h1>
      </div>
      <div className="row">
        <div className="form">
        <h2> Envie uma mensagem:</h2>
          <form className="formulario">
            <input
              type="text"
              placeholder="Seu nome"
              id="name"
              className="name"
            />
            <input
              type="text"
              placeholder="Seu email"
              id="email"
              className="email"
            />
            <textarea rows="10" cols="30" placeholder="Sua mensagem" id="message" className="message"/>

            <button type="submit" className="submit">
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className="contactDetails">
          <h2> Meus detalhes de contato:</h2>
          <h6>EMAIL</h6>
          <p>raniellimontagna@hotmail.com</p>
          <h6>TELEFONE</h6>
          <p>+55 54 99979-0871</p>
          <h6>ENDEREÇO</h6>
          <p>Paraí, RS - Linha Navegantes, 2035</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
