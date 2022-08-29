import React from "react";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import Question from "../../components/DesingPageComponents/Cards/Question";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";

import { CircleBar } from "../../components/DesingPageComponents/barComponent/CircleBar";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion";

import "./developmentpage.css";
import { Button } from "../../components/DesingPageComponents/barComponent/Button";
import { Link } from "react-router-dom";
import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar";
export const DevelopmentPacksPage = () => {
  return (
    <div className="developmentPacksPage">
      <HeaderSub />
      <div className="container custom-flexDesingpage  ">
        <div className="row custom-desktop">
          <ModalQuestion
            content={
              "Select the cards corresponding to the pack you want to hire and follow the buttons to continue the process!"
            }
          />
          <div className="col-12 ">
            <div className="col align-self-center">
              <Titulo
                title="developmentPacksPage"
                description="We develop the website and/or the software solutions you need to scale your business to the next level."
              />
            </div>
          </div>

          <div className="col-12 d-lg-none d-md-block">
            <Carousel />
          </div>
          <div className="col align-self-start custom-question">
            <Question />
          </div>
          <div className="col-12 d-none d-lg-block ">
            <CardDesktop />
          </div>
        </div>
      </div>
      {/* <div className="flex-bar">
        <Link to="/desing-packs-page">
          <Button content="DESIGN PACKS" />
        </Link>
        <CircleBar />
        <Link to="/marketin-packs-page">
          <Button content="MARKETING PACKS" />
        </Link>
      </div> */}

      <Bar
        btn1Content="DESIGN PACKS"
        pathbtn1="/desing-packs-page"
        btn2Content="MARKETING PACKS"
        pathbtn2="/marketin-packs-page"
        circleActive={1}
      />
    </div>
  );
};
