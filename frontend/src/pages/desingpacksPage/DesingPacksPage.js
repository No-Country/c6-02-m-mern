import { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../../components/DesingPageComponents/Cards/Card.js";
// import Card from "react-bootstrap/Card";

import Titulo from "../../components/DesingPageComponents/Cards/Titulo.js";

import Question from "../../components/DesingPageComponents/Cards/Question.js";

import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub.js";
import { ModalQuestion } from "../../components/DesingPageComponents/ModalQuestion.js/ModalQuestion.js";
import { Bar } from "../../components/DesingPageComponents/DownContainer/Bar/Bar.js";
import { GlobalContext } from "../../context/GlobalContext.js";
import "./desingpacksPakcs.css";

export const DesingPacksPage = () => {
  const [btnactive, setbtnactive] = useState(false);

  const { PaymentCtx, httpsCardsctx } = useContext(GlobalContext);
  const { datadesingCards } = httpsCardsctx;
  const { desingPageCardDataSelect, setdesingPageCardDataSelect } = PaymentCtx;

  const handlerActive = (e) => {
    if (e.target.className === "card") {
      setbtnactive(true);
      const pageSelect = e.target.childNodes[2].textContent;
      const priceCardActive = e.target.lastChild.lastChild.textContent;
      const titleCardActive = e.target.childNodes[0].textContent;
      setdesingPageCardDataSelect({
        ...desingPageCardDataSelect,
        title: titleCardActive,
        price: priceCardActive,
        pageSelect: pageSelect,
      });
    } else {
      alert("please select a card");
    }
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
                title="DESIGN PACKS"
                description="We design everything from the image of your business to the functionality of your website or software solution, to achieve an excellent experience for your users."
              />
            </div>
          </div>
          <div className="col align-self-start custom-question">
            <Question />
          </div>

          {/* carousel */}

          <div className="col-12 mt-lg-5">
            <Carousel className="carousel-custom">
              {datadesingCards &&
                datadesingCards.map((card) => {
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
        btn1Content="BACK"
        pathbtn1="/"
        btn2Content="NEXT"
        pathbtn2="/development-packs-page"
        circleActive={0}
      />
    </div>
  );
};
