import React from 'react';
import { Ulista } from '../DesingPageComponents/ListaDesordenada';
import { ArrowHeader } from './ArrowHeader.js';
import './HeaderSub.css';
import { ZComponentHeader } from './ZComponentHeader';


export const HeaderSub = ({ setIsActiveNav }) => {
  return (
    <header className="header">
      <div className="header__wrapper contenedor">
        <div className="arrow">
        <ArrowHeader />
        </div>
        <nav className="navo">
          <div className="Ulista">
          <Ulista setIsActiveNav={setIsActiveNav} />
          </div>
        </nav>
        <ZComponentHeader />
      </div>
    </header>
  );
};
