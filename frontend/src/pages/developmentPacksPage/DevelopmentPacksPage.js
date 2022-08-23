import React from "react";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import { NextAndBack } from "../../components/DesingPageComponents/DownContainer/NextBack.js";
import TituloDevelop from "../../components/DevelopmentPacks/TituloDevelop.js";
import Question from "../../components/DesingPageComponents/Cards/Question.js";
import { Carousel } from "bootstrap";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop.js";

export const DevelopmentPacksPage = ({ setIsActiveNav }) => {
  return (
    <div className="developmentPacksPage">
      <div className="container">
        <HeaderSub setIsActiveNav={setIsActiveNav} />
        <div className="row">
          <div className="col-12">
            <div className="col align-self-start">
              <Question />
            </div>
            <div className="col align-self-center">
              <TituloDevelop/>
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
