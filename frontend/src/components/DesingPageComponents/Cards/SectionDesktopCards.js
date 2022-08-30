
import React from "react";
import ModalInfo from "../../ModalInfo/ModalInfo";
import { ModalQuestion } from "../ModalQuestion.js/ModalQuestion";
import CardDesktop from "./CardDesktop";
import Carousel from "./Carousel";
import Question from "./Question";
import Titulo from "./Titulo";

export const SectionDesktopCards = () => {
  return (
    <div className="row custom-desktop">
      <ModalQuestion
        content={
          "Select the cards corresponding to the pack you want to hire and follow the buttons to continue the process!"
        }
      />

      <div className="col-12 ">
        <div className="col align-self-center">
          <Titulo
            title="DESIGN PACKS"
            description="We design everything from the image of your business to the functionality of your website or software solution, to achieve an excellent experience for your users."
          />
        </div>
      </div>

)}