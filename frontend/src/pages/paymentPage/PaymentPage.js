import React, { useContext } from "react";
import { HeaderSub } from "../../components/DesingPageComponents/HeaderSub/HeaderSub";
import { Payment } from "../../components/PaymentPageComponents/Payment";
import { GlobalContext } from "../../context/GlobalContext";

export const PaymentPage = ({ setIsActiveNav }) => {
  const { PaymentCtx } = useContext(GlobalContext);

  const { allDataUserPayment } = PaymentCtx;

  console.log(allDataUserPayment);
  return (
    <div className="PaymentPage">
      <HeaderSub setIsActiveNav={setIsActiveNav} />
      <Payment />
    </div>
  );
};
