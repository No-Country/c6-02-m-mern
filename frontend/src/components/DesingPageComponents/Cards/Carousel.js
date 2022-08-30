import React from "react";
import "./Carousel.css";
import CarouselIem from "./CarouselIem";
import './CarouselItem.css'

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide custom-class "
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
        </div>

        <div className="carousel-inner">
          <CarouselIem
            clases={"carousel-item active"}
            title={"Bronce"}
            include={"Include"}
            landing={"landing page design"}
            price={"$ 1.000"}
          />

          <div className="carousel-item">
            <CarouselIem
              title={"Silver"}
              include={"Include"}
              landing={"landing page design"}
              price={"$ 3.000"}
            />
          </div>

          <div className="carousel-item">
            <CarouselIem
              title={"Gold"}
              include={"Include"}
              landing={"landing page design"}
              price={"$ 5.000"}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
