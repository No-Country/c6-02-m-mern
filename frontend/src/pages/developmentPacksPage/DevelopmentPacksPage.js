import React, { useContext, useState } from "react";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop";
import Carousel from "../../components/DesingPageComponents/Cards/Carousel";
import Question from "../../components/DesingPageComponents/Cards/Question";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion";

import "./developmentpage.css";

import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar";
import { GlobalContext } from "../../context/GlobalContext";

const cardsDataDUMMY = [
  {
    id: "1dev",
    titulo: "Bronce",
    include: "include",
    page: "Landing page design",
    precio: 1000,
  },
  {
    id: "2dev",
    titulo: "Silver",
    include: "include",
    page: "Landing page design",
    precio: 3000,
  },
  {
    id: "3dev",
    titulo: "Gold",
    include: "include",
    page: "Landing page design",
    precio: 5000,
  },
];
export const DevelopmentPacksPage = () => {
  const [btnactive, setbtnactive] = useState(false);

  const { PaymentCtx } = useContext(GlobalContext);

  const { developmentPageCardDataSelect, setdevelopmentPageCardDataSelect } =
    PaymentCtx;

  const handlerActive = (e) => {
    setbtnactive(true);

    const titleCardActive = e.target.childNodes[3].textContent;
    const priceCardActive = e.target.childNodes[0].textContent;

    setdevelopmentPageCardDataSelect({
      ...developmentPageCardDataSelect,
      title: titleCardActive,
      price: priceCardActive,
    });
  };
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
            <CardDesktop
              pagetype="development"
              onActive={handlerActive}
              cardsDataDUMMY={cardsDataDUMMY}
            />
          </div>
        </div>
      </div>

      <Bar
        activebtn={btnactive}
        btn1Content="DESIGN PACKS"
        pathbtn1="/desing-packs-page"
        btn2Content="MARKETING PACKS"
        pathbtn2="/marketin-packs-page"
        circleActive={1}
      />
    </div>
  );
};
