import React from "react";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import { NextAndBack } from "../../components/DesingPageComponents/DownContainer/NextBack.js";
import "./desingpacksPakcs.css";
import Question from "../../components/DesingPageComponents/Cards/Question";

export const DesingPacksPage = ({ setIsActiveNav }) => {
  return (
    <div className="desingPacksPage">
      <div className="container">
        <HeaderSub setIsActiveNav={setIsActiveNav} />
        <div className="row">
          <div className="col-12">
            <div className="col align-self-start">
              <Question />
            </div>
            <div className="col align-self-center">
              <Titulo />
            </div>
          </div>

          <div className="col-12 d-lg-none d-md-block">
            <Carousel />
          </div>
          <div className="col-12 d-none d-lg-block">
            <CardDesktop />
          </div>
        </div>
      </div>

      <NextAndBack />
    </div>
  );
};
