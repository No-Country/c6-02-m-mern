import React from "react";
import "./sectionDiscover.css";
import discoverGuy from "../../../assets/images/discoverImageGuy.png";
import discoverOffice from "../../../assets/images/discoverOffice.png";
import discoverSuccess from "../../../assets/images/discoverSuccess.png";

export const SectionDiscover = () => {
  return (
    <>
      <div className="sectionDiscover">
        <div className="container-discover">
          <div className="wrapper-title">
            <h2 className="wrapper-title__title">
              <span className="color-yellow">Discover</span> how we help you
              generate online presence!
            </h2>
          </div>

          <div className="wrapper-discover">
            <div className="cardDiscover">
              <img src={discoverOffice} className="cardDiscover__img" />
              <p className="cardDiscover__paragraph">
                we have a panel of experts in your area willing to take your
                business to the <span className="color-yellow">next level</span>
              </p>
            </div>
            <div className="cardDiscover">
              <img src={discoverSuccess} className="cardDiscover__img" />
              <p className="cardDiscover__paragraph">
                <span className="color-yellow">hire the digitization</span> of
                your business in simple steps!
              </p>
            </div>
            <div className="cardDiscover">
              <img src={discoverGuy} className="cardDiscover__img" />
              <p className="cardDiscover__paragraph">
                We have a wide{" "}
                <span className="color-yellow">variety of packages </span>
                according to your needs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
