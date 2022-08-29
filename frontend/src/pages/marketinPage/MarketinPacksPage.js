import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/DesingPageComponents/barComponent/Button";
import { CircleBar } from "../../components/DesingPageComponents/barComponent/CircleBar";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import Question from "../../components/DesingPageComponents/Cards/Question";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion";

import "./marketingPacks.css";
export const MarketinPacksPage = () => {
  return (
    <div className="marketinPacksPage">
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
                title="marketingPacksPage"
                description="We create and manage your presence in social networks and advertising, based on a rigorous study of the market and the user of your product!"
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
        <Link to="/development-packs-page">
          <Button content="DESIGN PACKS" />
        </Link>
        <CircleBar />
        <Link to="/payment-page">
          <Button content="PAYMENT DETAILS" />
        </Link>
      </div> */}

      <Bar
        btn1Content="DESIGN PACKS"
        pathbtn1="/development-packs-page"
        btn2Content="PAYMENT DETAILS"
        pathbtn2="/payment-page"
        circleActive={2}
      />
    </div>
  );
};
