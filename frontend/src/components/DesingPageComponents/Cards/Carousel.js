import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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

        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2>Bronce</h2>
            <h3>Include</h3>
            <p>Lainding page design</p>
            <hr />
            <h3 className="precio">Chose $ 1.000 </h3>
          </div>

          <div class="carousel-item">
            <h2>Silver</h2>
            <h3>Include</h3>
            <p>Lainding page design</p>
            <hr />
            <h3 className="precio">Chose $ 3.000</h3>
          </div>

          <div class="carousel-item">
            <h2>Gold</h2>
            <h3>Include</h3>
            <p>Lainding page design</p>
            <hr />
            <h3 className="precio">Chose $ 5.000</h3>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
