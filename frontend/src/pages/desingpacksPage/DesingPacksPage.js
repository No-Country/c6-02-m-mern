import { useContext, useState } from "react";
import Titulo from "../../components/DesingPageComponents/Cards/Titulo.js";
import Question from "../../components/DesingPageComponents/Cards/Question.js";
import CardDesktop from "../../components/DesingPageComponents/Cards/CardDesktop.js";
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
    setbtnactive(true);
    const priceCardActive = e.target.childNodes[3].textContent;
    const titleCardActive = e.target.childNodes[0].textContent;

    setdesingPageCardDataSelect({
      ...desingPageCardDataSelect,
      title: titleCardActive,
      price: priceCardActive,
    });
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

          <div className="col align-self-start custom-question">
            <Question />
          </div>
          <div className="col-12 d-none d-lg-block ">
            <CardDesktop
              pagetype="desingPage"
              onActive={handlerActive}
              data={datadesingCards}
            />
          </div>
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
