import React from "react";
import "./Confirmation.css";

export const Confirmation = () => {
  return (
    <div className="confirmationContainer">
      <div className="subConfirmationContainer">
        <div className="choosnameContainer">
          <div className="subChoosenameContainer">
            <h1>
              <p className="Choosethe">Choose the</p>
              <p className="PaymentMethodp">payment method</p>

              <p className="fillouttheForm">
                Fill out the form of the payment method you selected to
                continue!
              </p>
            </h1>
          </div>
        </div>
        <div className="bigPalpayContainer">
          <div className="paypalpayContainer">
            <div className="BorrarluegoContainer">
              <h1>IMAGEN TRAIDA DESDE EL BACKEND</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
