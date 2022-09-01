import "./Payment.css";
import { PaypalIcon } from "./PaypalIcon";
import { StrypiceIcon } from "./StrypiceIcon";
import { AccountDetail } from "./AccountDetails";
import { BigPaypalIcon } from "./BigPaypalIcon";
import { BigStrypiceIcon } from "./BigStrypiceIcon";
import { useState } from "react";

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
      seterror(e.message || "something wend wrong please try again");
    }
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
              <button className="buttons">
                <div className="BigPaypalIcon">
                  <BigPaypalIcon />
                </div>
                <div className="PaypalIcon">
                  <PaypalIcon />
                </div>
                <p className="colorPayPal">PAYPAL</p>
              </button>
              <button className="buttons" onClick={handlerOpenStripe}>
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
