import React from "react";
import "./Payment.css";

export const AccountDetail = ({ metal, section, price, totalPrice }) => {
  return (
    <div className="accountDetails">
      <h1> Account Details</h1>

      <div className="textContent">
        <p>
          {metal} {section} ... ${price}
        </p>
        <p>
          {metal} {section} ... ${price}
        </p>
        <p>
          {metal} {section} ... ${price}
        </p>
        <p className="total">total ......... ${totalPrice}</p>
      </div>
    </div>
  );
};
