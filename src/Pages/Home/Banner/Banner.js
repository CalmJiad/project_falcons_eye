import React from "react";
import "./Banner.css";
import slider1 from "../../../images/slider/1.jpg";
import slider2 from "../../../images/slider/2.jpg";
import slider3 from "../../../images/slider/3.jpg";
import slider4 from "../../../images/slider/4.jpg";
import slider5 from "../../../images/slider/5.jpg";
import slider6 from "../../../images/slider/6.jpg";

const Banner = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner banner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
