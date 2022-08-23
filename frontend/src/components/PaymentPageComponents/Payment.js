import React from "react";
import "./Payment.css";
import { PaypalIcon } from "./PaypalIcon";
import { StrypiceIcon } from "./StrypiceIcon";

export const PayContainer = () => {
  return (
    <div className="paymentContainer">
      <div className="subPaymentContainer">
        <div className="accountDetails">
          <h1> Account Details</h1>

          <div className="textContent">
            <p>Bronze DESIGN PACK ... $1000</p>
            <p>Bronze DEVELOPMENT PACK ... $1000</p>
            <p>Bronze MARKETING PACK ...</p>
            <p className="total">total ..... $3000</p>
          </div>
        </div>
        <div className="paymentMethodContainer">
          <div className="subPaymentMethodContainer">
            <p>Choose the</p>
            <p className="paymentmeth">payment method</p>
            <div className="buttonsPayContainer">
              <button className="buttons">
                <PaypalIcon />
                <p>PAYPAL</p>
              </button>
              <button className="buttons">
                <StrypiceIcon />
                <p>STRIPE</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
