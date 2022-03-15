import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style/homePage.css"

const HomePage = (props) => {
  const navigate = useNavigate()
  const routeChange = () =>{ 
    navigate({
        pathname: "/tag-category",
        test: "text"
      });
    }
  return (
    <div id="homePageBackground">
      <div className="blur">
        <p id="homePageTitle">Home Page</p>
        <Button id="homePageButton" onClick={routeChange}>Watch Post Content</Button>
      </div>
    </div>
  )
}

export default HomePage;
