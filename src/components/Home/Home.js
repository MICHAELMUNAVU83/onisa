import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../images/slider1.png";
import image2 from "../../images/Slider2.png";

const Home = () => (
  <>
    <div
      style={{
        width: "100%",
        height: "3px",
        backgroundColor: "#9e1b1d",
        position: "absolute",
        top: "125px",
        left: "0",
        zIndex: "100",
      }}
    ></div>
    <div style={{ overflow: "none", paddingTop: "55px" }}>
      <Carousel fade>
        <Carousel.Item>
          <img src={image} className="d-block w-100" alt="stock" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            alt="stock2"
            className="d-block w-100 "
            style={{ height: "auto" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  </>
);

export default Home;
