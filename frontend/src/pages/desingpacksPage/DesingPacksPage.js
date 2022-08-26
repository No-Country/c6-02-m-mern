import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import { NextAndBack } from "../../components/DesingPageComponents/DownContainer/NextBack.js";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import "./desingpacksPakcs.css";
import Question from "../../components/DesingPageComponents/Cards/Question";

export const DesingPacksPage = () => {
  return (
    <div className="desingPacksPage">
      <HeaderSub />
      <div className="container custom-flexDesingpage  ">
        <div className="row custom-desktop">
          <div className="col-12 ">
            <div className="col align-self-center">
              <Titulo />
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

      <NextAndBack />
    </div>
  );
};
