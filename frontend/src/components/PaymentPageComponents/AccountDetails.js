import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Payment.css";

export const AccountDetail = () => {
  const { PaymentCtx } = useContext(GlobalContext);

  return (
    <div className="accountDetails">
      <h1>
        <span className="sizeAccountDetails">Account Details</span>
      </h1>

      <div className="textContent">
        {PaymentCtx.allDataUserPayment.map((detail, idx) => {
          return (
            <p className="classPacks" key={idx}>
              {detail.title} {detail.pageSelect + " " + "Page"} ...{" "}
              <span className="colorPricePacks">${detail.price}</span>
            </p>
          );
        })}

        <p className="total">
          Total ....{" "}
          <span className="colorPrice">
            ${PaymentCtx.totalAmountPayment.totalAmount}
          </span>
        </p>
      </div>
    </div>
  );
};
