import React from 'react';
import { HeaderSub } from '../../components/DesingPageComponents/HeaderSub/HeaderSub';
import { PayContainer } from '../../components/PaymentPageComponents/Payment';

export const PaymentPage = ({setIsActiveNav}) => {
  return (
    <div className="PaymentPage">
       <HeaderSub setIsActiveNav={setIsActiveNav} />
       <PayContainer/> 
    </div>
  );
};
