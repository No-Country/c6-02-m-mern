import React from "react";
import { FinalButton } from "./FinalButton";
import "./FinalConfirmation.css";

export const FinalConfirmation = () => {
  return (
    <div className="finalConfirmationContainer">
      <div className="subFinalConfirmationContainer">
        <div className="succefullyContainer">
          <p className="succefully">
            Your purchase was made
            <div className="greenSuccesfully">successfully!</div>
          </p>
        </div>
        <div className="showVoucherContainer">
          <p>
            <button className="showVoucherButton">SHOW VOUCHER</button>
          </p>
        </div>
        <div className="ourRepresentativesContainer">
          <p className="ourRepresentatives">
            Our representatives will be in contact with you soon
          </p>
        </div>
        <div className="anypoblemContainer">
          <p className="anyproblem">Did you have any problem?</p>

          <FinalButton />
        </div>
      </div>
    </div>
  );
};
