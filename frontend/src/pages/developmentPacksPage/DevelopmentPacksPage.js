import React, { useContext, useState } from "react";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion";
import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar";
import { GlobalContext } from "../../context/GlobalContext";
import Carousel from "react-bootstrap/Carousel";
import Card from "../../components/DesingPageComponents/Cards/Card.js";

import Question from "../../components/DesingPageComponents/Cards/Question";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import "./developmentpage.css";

export const DevelopmentPacksPage = () => {
  const [btnactive, setbtnactive] = useState(false);

  const { PaymentCtx, httpsCardsctx } = useContext(GlobalContext);
  const { datadevCards } = httpsCardsctx;
  const { developmentPageCardDataSelect, setdevelopmentPageCardDataSelect } =
    PaymentCtx;

  const handlerActive = (e) => {
    if (e.target.className === "card") {
      setbtnactive(true);
      const pageSelect = e.target.childNodes[2].textContent;
      const priceCardActive = e.target.lastChild.lastChild.textContent;
      const titleCardActive = e.target.childNodes[0].textContent;
      setdevelopmentPageCardDataSelect({
        ...developmentPageCardDataSelect,
        title: titleCardActive,
        price: priceCardActive,
        pageSelect: pageSelect,
      });
    } else {
      alert("please select a card");
    }
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
                title="DEVELOPMENT PACKS"
                description="We develop the website and/or the software solutions you need to scale your business to the next level."
              />
            </div>
          </div>

          <div className="col align-self-start custom-question">
            <Question />
          </div>
          {/* carousel */}

          <div className="col-12">
            <Carousel>
              {datadevCards &&
                datadevCards.map((card) => {
                  return (
                    <Carousel.Item key={card._id}>
                      <Card
                        id={card._id}
                        titulo={card.titulo}
                        include={card.include}
                        page={card.categoria}
                        precio={card.precio}
                        onActive={handlerActive}
                      />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
          {/* carousel */}
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
    </div> /**/
  );
};
