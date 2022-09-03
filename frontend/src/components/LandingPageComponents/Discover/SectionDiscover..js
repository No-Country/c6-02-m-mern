import React from "react";
import "./sectionDiscover.css";
import discoverGuy from "../../../assets/images/discoverImageGuy.png";
import discoverOffice from "../../../assets/images/discoverOffice.png";
import discoverSuccess from "../../../assets/images/discoverSuccess.png";
import { CardDiscover } from "./CardDiscover";

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
            <CardDiscover
              image={discoverOffice}
              description="we have a panel of experts in your area willing to take your
                business to the"
              alt={"discoverimage"}
              extraDes=" next level"
            />
            <CardDiscover
              image={discoverSuccess}
              description="hire the digitization of
                your business in  "
              alt={"discoverSuccess"}
              extraDes="simple steps!"
            />

            <CardDiscover
              image={discoverGuy}
              description="We have a wide variety of packages
                according to "
              alt={"discoverGuy"}
              extraDes="your needs!"
            />
          </div>
        </div>
      </div>
    </>
  );
};
