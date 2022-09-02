import "./Payment.css";
import { PaypalIcon } from "./PaypalIcon";
import { StrypiceIcon } from "./StrypiceIcon";
import { AccountDetail } from "./AccountDetails";
import { BigPaypalIcon } from "./BigPaypalIcon";
import { BigStrypiceIcon } from "./BigStrypiceIcon";
import { useState } from "react";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import LoadingSpinner from "../../UI/LoadingSpinner";

export const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);
  const handlerOpenStripe = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://nc-digitize.herokuapp.com/api/payment/stripe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Adquirir paquetes digitize",
            default_price_data: 4000,
            description:
              "silver devPacket + Gold desingPacket + silver desingPacket",
          }),
        }
      );

      const responseData = await response.json();

      window.location.href = responseData;

      if (responseData.error) {
        setIsLoading(false);
        throw new Error(responseData.message);
      }

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
      seterror(e.message || "something wend wrong in stripe please try again");
    }
  };

  const createOrder = async () => {
    try {
      const response = await fetch(
        "https://nc-digitize.herokuapp.com/api/payment/paypal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: 100,
          }),
        }
      );

      const responseData = await response.json();

      if (responseData.error) {
        throw new Error(responseData.message);
      }

      return responseData.orderID;
    } catch (e) {
      console.log(e.message);
      seterror(e.message || "something wend wrong in paypal please try again");
    }
  };
  const onApprove = (data) => {
    console.log(data);
  };
  return (
    <div className="paymentContainer">
      <div className="subPaymentContainer">
        <AccountDetail />
        <div className="paymentMethodContainer">
          <div className="subPaymentMethodContainer">
            <div className="paragraphContainer">
              <p className="colorChooseThe">Choose the</p>
              <p className="paymentmeth">payment method</p>
            </div>
            <div className="buttonsPayContainer">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AX3zcQlLa0eRLfFezweDWnBEz8-uamICBoGUP3FkpLM8dLk4A4kZr6vDI5TkQqsTyzkq7fI5PKUsH-1S",
                  currency: "USD",
                }}
              >
                <PayPalButtons
                  style={{
                    color: "blue",
                    shape: "pill",
                    label: "pay",
                    height: 35,
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                ></PayPalButtons>
              </PayPalScriptProvider>
              {/*
              <button className="buttons">
                
                  <div className="BigPaypalIcon">
                  <BigPaypalIcon />
                </div>
                <div className="PaypalIcon">
                  <PaypalIcon />
                </div>
                <p className="colorPayPal">PAYPAL</p>
                
              </button>
              */}

              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <button
                  className="buttons"
                  onClick={handlerOpenStripe}
                  style={{ marginTop: "-6px" }}
                >
                  <div className="BigStrypiceIcon">
                    <BigStrypiceIcon />
                  </div>
                  <div className="StrypiceIcon">
                    <StrypiceIcon />
                  </div>
                  <p className="colorStripe">STRIPE</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
