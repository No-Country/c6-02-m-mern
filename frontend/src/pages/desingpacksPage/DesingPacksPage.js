import React from 'react';
import { HeaderSub } from '../../components/DesingPageComponents/HeaderSub/HeaderSub.js';
import { NextAndBack } from '../../components/DesingPageComponents/DownContainer/NextBack.js';

export const DesingPacksPage = ({ setIsActiveNav }) => {
  return (
    <div className="desingPacksPage">
      <HeaderSub setIsActiveNav={setIsActiveNav} />
      <NextAndBack/>
    </div>
  );
};
