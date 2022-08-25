import React from "react";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { CardOurWork } from "./CardOurWork";
import desingPortfolioImage from "../../assets/images/desingPortfolioOurWork.png";
import DevelopmentPortfolioImage from "../../assets/images/developmentPortfolioOurWork.png";
import MarketingPortfolioImage from "../../assets/images/MarketinPortfolioOurWork.png";
import "./pageOurWork.css";
export const PageOurWork = () => {
  return (
    <>
      <HeaderSub />
      <div className="PageOurWork">
        <h3 className="PageOurWork__title">
          Our <span className="PageOurWork--yellow">Work</span>
        </h3>

        <div className="PageOurWork-content">
          <CardOurWork
            title={"Desing portfolio"}
            image={desingPortfolioImage}
          />
          <CardOurWork
            title={"Development portfolio"}
            image={DevelopmentPortfolioImage}
          />
          <CardOurWork
            title={"Marketing portfolio"}
            image={MarketingPortfolioImage}
          />
        </div>
      </div>
      ;
    </>
  );
};
