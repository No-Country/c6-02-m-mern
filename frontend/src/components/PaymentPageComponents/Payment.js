import { StrypiceIcon } from "./StrypiceIcon";
import { AccountDetail } from "./AccountDetails";

import { BigStrypiceIcon } from "./BigStrypiceIcon";
import { useContext, useState } from "react";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { GlobalContext } from "../../context/GlobalContext";
import "./Payment.css";

export const Payment = () => {
  const { PaymentCtx } = useContext(GlobalContext);

  const {
    desingPageCardDataSelect,
    developmentPageCardDataSelect,
    marketingPageCardDataSelect,
    totalAmountPayment: { totalAmount },
  } = PaymentCtx;

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
            default_price_data: totalAmount,
            description: `${desingPageCardDataSelect.title} desingPacket + ${developmentPageCardDataSelect.title} developmentPacket +  ${marketingPageCardDataSelect.title} marketinPacket`,
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
            value: totalAmount,
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
              <div className="wrapper-paypal-custom">
                <div className="containerpaypalButton">
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
                        height: 45,
                      }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                    ></PayPalButtons>
                  </PayPalScriptProvider>
                </div>
              </div>

              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <button className="buttons" onClick={handlerOpenStripe}>
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
