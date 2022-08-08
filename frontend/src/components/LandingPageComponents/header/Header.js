import React, { useState } from 'react';
import './header.css';
import { ZLogoIcon } from './ZLogoIcon';
import { CloseIconNav } from './CloseIconNav';
import { Ulist } from './Ulist';
import { LogoDigitize } from './LogoDigitize';
import { HamburgerLogo } from './HamburgerLogo';

export const Header = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const handlerHamburger = () => {
    setIsActiveNav(true);
  };
  return (
    <header className="header">
      <div className="header__wrapper container">
        <LogoDigitize />
        <nav className={!isActiveNav ? 'nav' : 'nav isActiveNav'}>
          <Ulist setIsActiveNav={setIsActiveNav} />
          <ZLogoIcon />
          <CloseIconNav setIsActiveNav={setIsActiveNav} />
        </nav>
        <HamburgerLogo handlerHamburger={handlerHamburger} />
      </div>
    </header>
  );
};
