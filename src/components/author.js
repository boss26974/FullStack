import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/author.css";

const Author = () => {
  const [alluser, setAllUser] = useState([]);

  useEffect(() => {
    fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users")
      .then((res) => {
        res.json().then((users) => {
          setAllUser(users);
        });
      })
      .catch((err) => {
        console.log("failed to test");
      });
  }, []);

  console.log();
  return (
    <div id="#authorRoot">
      <h1 id="authorTitle">Author Page</h1>
      <Container>
        <Row>
            {alluser.map((user) => {
              return (
                <Col md={6}>
                <Card key={user.id} style={{ marginTop: "5vh", width: '36rem', marginBottom: "5vh" }}>
                  <Card.Body>
                    <Card.Img
                      src={user.avatar_urls['96']}
                      style={{ textAlign: "center" }}
                    ></Card.Img>
                    <Card.Title id="authorName">
                      Name : {user.name}
                    </Card.Title>
                    <Card.Title style={{ textAlign: "center" }}>
                      Slug : {user.slug}
                    </Card.Title>
                  </Card.Body>
                </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Author;
