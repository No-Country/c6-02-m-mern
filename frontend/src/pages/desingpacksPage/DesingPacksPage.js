 
import React from "react";
import CardDesktop from "../../components/DesingPageComponents/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import { HeaderSub } from '../../components/DesingPageComponents/HeaderSub/HeaderSub.js';
import { NextAndBack } from '../../components/DesingPageComponents/DownContainer/NextBack.js';
 

export const DesingPacksPage = ({ setIsActiveNav }) => {
  return (
    <div className="desingPacksPage">
      <div class="container">
        <div class="row">
          <div>
            <Titulo />
          </div>
          <div class="col-12 class-carousel-personalizado">
            <Carousel />
          </div>
          <div className="col-12 d-none d-lg-block">
            <CardDesktop />
          </div>
        </div>
      </div>

      <HeaderSub setIsActiveNav={setIsActiveNav} />
      <NextAndBack/>
    </div>
  );
};
