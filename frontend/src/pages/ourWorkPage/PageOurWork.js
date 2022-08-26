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
      <div className="container">
        <div className="PageOurWork">
          <h3 className="PageOurWork__title">
            Our <span className="PageOurWork--yellow">Work</span>
          </h3>

          <div className="PageOurWork-content">
            <CardOurWork
              title={"Desing portfolio"}
              image={desingPortfolioImage}
              alt={"Desing portfolio"}
            />
            <CardOurWork
              title={"Development portfolio"}
              image={DevelopmentPortfolioImage}
              alt={"Development portfolio"}
            />
            <CardOurWork
              title={"Marketing portfolio"}
              image={MarketingPortfolioImage}
              alt={"Marketing portfolio"}
            />
            <CardOurWork
              title={"Marketing portfolio"}
              image={MarketingPortfolioImage}
              alt={"Marketing portfolio"}
            />
            <CardOurWork
              title={"Marketing portfolio"}
              image={MarketingPortfolioImage}
              alt={"Marketing portfolio"}
            />
            <CardOurWork
              title={"Marketing portfolio"}
              image={MarketingPortfolioImage}
              alt={"Marketing portfolio"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
