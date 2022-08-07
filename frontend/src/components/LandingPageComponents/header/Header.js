import React from 'react';
import './header.css';

import logoDigitize from '../../../assets/images/digital-logo.svg';
import iconHamburger from '../../../assets/images/hamburger.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <img className="header__logo__img" src={logoDigitize} />
        </div>
        <nav className="nav">
          <ul className="Ulist">
            <li className="Ulist__list">
              <a className="Ulist__link" href="#">
                digitize NOW!
              </a>
            </li>
            <li className="Ulist__list">
              <a className="Ulist__link" href="#">
                about
              </a>
            </li>
            <li className="Ulist__list">
              <a className="Ulist__link" href="#">
                contact us
              </a>
            </li>
          </ul>
        </nav>
        <img className="header__hamburger" src={iconHamburger} />
      </div>
    </header>
  );
};
