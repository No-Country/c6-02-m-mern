import Titulo from "../../components/DesingPageComponents/Cards/Titulo.js";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel.js";
import Question from "../../components/DesingPageComponents/Cards/Question.js";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop.js";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion.js";
import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar.js";

import "./desingpacksPakcs.css";
import { useState } from "react";
export const DesingPacksPage = () => {
  const [btnactive, setbtnactive] = useState(false);
  const handlerActive = (e) => {
    setbtnactive(true);
    console.log(e.target.firstChild.id);
  };
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
            <CardDesktop pagetype="desingPage" onActive={handlerActive} />
          </div>
        </div>
      </div>
      {/* <div className="flex-bar">
        <Link to="/">
          <Button content="BACK" />
        </Link>
        <CircleBar />
        <Link to="/development-packs-page">
          <Button content="NEXT" />
        </Link>
      </div> */}
      <Bar
        activebtn={btnactive}
        btn1Content="BACK"
        pathbtn1="/"
        btn2Content="NEXT"
        pathbtn2="/development-packs-page"
        circleActive={-1}
      />
    </div>
  );
};
