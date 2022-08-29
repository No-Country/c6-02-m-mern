import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import "./desingpacksPakcs.css";
import { CircleBar } from "../../components/DesingPageComponents/barComponent/CircleBar.js";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion.js";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo.js";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel.js";
import Question from "../../components/DesingPageComponents/Cards/Question.js";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop.js";
import { Button } from "../../components/DesingPageComponents/barComponent/Button.js";
import { Link } from "react-router-dom";

export const DesingPacksPage = () => {
  return (
    <div className="desingPacksPage">
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
                title="DesingPacksPage"
                description="We design everything from the image of your business to the functionality of your website or software solution, to achieve an excellent experience for your users."
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
      <div className="flex-bar">
        <Link to="/">
          <Button content="BACK" />
        </Link>
        <CircleBar />
        <Link to="/development-packs-page">
          <Button content="NEXT" />
        </Link>
      </div>
    </div>
  );
};
