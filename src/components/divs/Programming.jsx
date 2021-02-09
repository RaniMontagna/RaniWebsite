import React from "react";
import { Button, Card, CardGroup} from "react-bootstrap";
import "./Programming.css";

function Programming() {
  return (
    <div className="programming">
      <h1>Programação</h1>
      <h2>Minhas Linguagens Preferidas:</h2>
      <div className="cards">
        <CardGroup>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
            <Card.Body>
              <Card.Title>ReactJS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button href="https://pt-br.reactjs.org" target="_blank" variant="dark">Saiba Mais</Button>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/582/361/png-transparent-postgre-sql-logo-postgresql-relational-database-management-system-object-relational-database-database-blue-text-logo.png" />
            <Card.Body>
              <Card.Title>PostgreSQL</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button href="https://www.postgresql.org" target="_blank" variant="dark">Saiba Mais</Button>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/108811513/original/c002db69022fcf4ec85d61d9366487ca5f59fb43/edit-html-and-css-scss.jpg" />
            <Card.Body>
              <Card.Title>HTML & CSS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" variant="dark">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Programming;
