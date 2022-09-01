import React from "react";
import "./Payment.css";
import { PaypalIcon } from "./PaypalIcon";
import { StrypiceIcon } from "./StrypiceIcon";
import { AccountDetail } from "./AccountDetails";
import { BigPaypalIcon } from "./BigPaypalIcon";
import { BigStrypiceIcon } from "./BigStrypiceIcon";

export const Payment = () => {
  return (
    <div className="paymentContainer">
      <div className="subPaymentContainer">
        <AccountDetail
          metal={"Bronze"}
          section={"DEVELOPMENT PACK"}
          price={"3500"}
          totalPrice={"10000"}
        />
        <div className="paymentMethodContainer">
          <div className="subPaymentMethodContainer">
            <div className="paragraphContainer">
              <p className="colorChooseThe">Choose the</p>
              <p className="paymentmeth">payment method</p>
            </div>
            <div className="buttonsPayContainer">
              <button className="buttons">
                <div className="BigPaypalIcon">
                  <BigPaypalIcon />
                </div>
                <div className="PaypalIcon">
                  <PaypalIcon />
                </div>
                <p className="colorPayPal">PAYPAL</p>
              </button>
              <button className="buttons">
                <div className="BigStrypiceIcon">
                  <BigStrypiceIcon />
                </div>
                <div className="StrypiceIcon">
                  <StrypiceIcon />
                </div>
                <p className="colorStripe">STRIPE</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
