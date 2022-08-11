import React from 'react';
import { HeaderSub } from '../../components/DesingPageComponents/HeaderSub';
import './desingPacksPage.css';

export const DesingPacksPage = ({ setIsActiveNav }) => {
  return (
    <div className="desingPacksPage">
      <HeaderSub setIsActiveNav={setIsActiveNav} />
    </div>
  );
};
