import React, { useContext, useState } from "react";
import Card from "../../components/DesingPageComponents/Cards/Card";
import Question from "../../components/DesingPageComponents/Cards/Question";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo";
import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion";
import { GlobalContext } from "../../context/GlobalContext";
import Carousel from "react-bootstrap/Carousel";

import "./marketingPacks.css";

export const MarketinPacksPage = () => {
  const [btnactive, setbtnactive] = useState(false);

  const { PaymentCtx, httpsCardsctx } = useContext(GlobalContext);
  const { datamarketingCards } = httpsCardsctx;

  const { marketingPageCardDataSelect, setmarketingPageCardDataSelect } =
    PaymentCtx;

  const handlerActive = (e) => {
    if (e.target.className === "card") {
      setbtnactive(true);
      const pageSelect = e.target.childNodes[2].textContent;
      const priceCardActive = e.target.lastChild.lastChild.textContent;
      const titleCardActive = e.target.childNodes[0].textContent;
      setmarketingPageCardDataSelect({
        ...marketingPageCardDataSelect,
        title: titleCardActive,
        price: priceCardActive,
        pageSelect: pageSelect,
      });
    } else {
      alert("please select a card");
    }
  };
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
                title="MARKETING PAGE"
                description="We create and manage your presence in social networks and advertising, based on a rigorous study of the market and the user of your product!"
              />
            </div>
          </div>

          <div className="col align-self-start custom-question">
            <Question />
          </div>
          {/* carousel */}

          <div className="col-12 mt-lg-5">
            <Carousel>
              {datamarketingCards &&
                datamarketingCards.map((card) => {
                  return (
                    <Carousel.Item key={card._id}>
                      <Card
                        id={card._id}
                        titulo={card.titulo}
                        include={card.include}
                        page={card.page}
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
        pathbtn1="/development-packs-page"
        btn2Content="PAYMENT DETAIL"
        pathbtn2="/payment-page"
        circleActive={2}
      />
    </div> /**/
  );
};
