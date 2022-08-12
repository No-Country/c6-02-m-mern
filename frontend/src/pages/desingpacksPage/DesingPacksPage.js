import React from "react";
import CardDesktop from "../../components/DesingPageComponents/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import "./desingPacksPage.css";

export const DesingPacksPage = () => {
  return (
    <div className="desingPacksPage">
      <div class="container">
        <div class="row">
          <div class="col-12 carousel class-carousel-personalizado">
            <Carousel />
          </div>
          <div className="col-12 d-none d-lg-block">
            <CardDesktop />
          </div>
        </div>
      </div>
    </div>
  );
};
