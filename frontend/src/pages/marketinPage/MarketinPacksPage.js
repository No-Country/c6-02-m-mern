import React from 'react';
import { HeaderSub } from '../../components/DesingPageComponents/HeaderSub/HeaderSub';
import { NextAndBack } from '../../components/DesingPageComponents/DownContainer/NextBack.js';

export const MarketinPacksPage = ({setIsActiveNav}) => {
  return (
    <div className="marketinPacksPage">
       <HeaderSub setIsActiveNav={setIsActiveNav} />
       <NextAndBack/>
    </div>
  );
};
