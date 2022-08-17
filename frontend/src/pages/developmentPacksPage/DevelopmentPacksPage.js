import React from 'react';
import { HeaderSub } from '../../components/DesingPageComponents/HeaderSub/HeaderSub.js';
import { NextAndBack } from '../../components/DesingPageComponents/DownContainer/NextBack.js';

export const DevelopmentPacksPage = ({ setIsActiveNav }) => {
  return (
    <div className="developmentPacksPage">
      <HeaderSub setIsActiveNav={setIsActiveNav} />
      <NextAndBack/>
    </div>
  );
};
