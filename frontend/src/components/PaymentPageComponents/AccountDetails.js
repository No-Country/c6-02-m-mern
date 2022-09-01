import React from "react";
import "./Payment.css";

export const AccountDetail = ({ metal, section, price, totalPrice }) => {
  return (
    <div className="accountDetails">
      <h1>
        <span className="sizeAccountDetails">Account Details</span>
      </h1>

      <div className="textContent">
        <p className="classPacks">
          {metal} {section} ...{" "}
          <span className="colorPricePacks">${price}</span>
        </p>
        <p className="classPacks">
          {metal} {section} ...{" "}
          <span className="colorPricePacks">${price}</span>
        </p>
        <p className="classPacks">
          {metal} {section} ...{" "}
          <span className="colorPricePacks">${price}</span>
        </p>
        <p className="total">
          Total .... <span className="colorPrice">${totalPrice}</span>
        </p>
      </div>
    </div>
  );
};
