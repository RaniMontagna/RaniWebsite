import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./Programming.css";

function Programming() {
  return (
    <div id="programming" className="programming">
      <h1>Programação</h1>
      <h2>Minhas Linguagens Preferidas:</h2>
      <div className="cards">
        <CardGroup>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
            />
            <Card.Body>
              <Card.Title>ReactJS</Card.Title>
              <Card.Text>
                O React é uma biblioteca JavaScript de código aberto com foco em
                criar interfaces de usuário em páginas web. É mantido pelo
                Facebook, Instagram, outras empresas e uma comunidade de
                desenvolvedores individuais. É utilizado nos sites da Netflix,
                Imgur, Airbnb, Walmart e outros.
              </Card.Text>
              <Button
                href="https://pt-br.reactjs.org"
                target="_blank"
                variant="dark"
              >
                Saiba Mais
              </Button>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://w7.pngwing.com/pngs/582/361/png-transparent-postgre-sql-logo-postgresql-relational-database-management-system-object-relational-database-database-blue-text-logo.png"
            />
            <Card.Body>
              <Card.Title>PostgreSQL</Card.Title>
              <Card.Text>
                PostgreSQL é um sistema de banco de dados poderoso e em código
                aberto para Windows, Mac e Linux. Ele possui mais de 15 anos de
                desenvolvimento ativo e uma arquitetura que ganhou uma forte
                reputação devido a sua estabilidade e integridade de dados.
              </Card.Text>
              <Button
                href="https://www.postgresql.org"
                target="_blank"
                variant="dark"
              >
                Saiba Mais
              </Button>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg"
            />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>
                O CSS é uma linguagem de folha de estilo composta por “camadas”,
                criado com o propósito de estilizar as páginas HTML, ou seja,
                definir a aparência das páginas, para deixá-las visualmente mais
                bonitas e agradáveis, podendo alterar a fonte, cor,
                posicionamento dos elementos, layout e muito mais.
              </Card.Text>
              <Button
                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                target="_blank"
                variant="dark"
              >
                Saiba Mais
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Programming;
