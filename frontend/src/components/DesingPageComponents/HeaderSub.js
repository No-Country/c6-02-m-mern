import React from 'react';
import { Ulist } from '../LandingPageComponents/header/Ulist';
import { ArrowHeader } from './ArrowHeader';
import './HeaderSub.css';
import { ZComponentHeader } from './ZComponentHeader';

export const HeaderSub = ({ setIsActiveNav }) => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <ArrowHeader />
        <nav className="nav">
          <Ulist setIsActiveNav={setIsActiveNav} />
        </nav>
        <ZComponentHeader />
      </div>
    </header>
  );
};
