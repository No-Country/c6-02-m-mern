import React from 'react';
import { Ulista } from './ListaDesordenada';
import { ArrowHeader } from './ArrowHeader.js';
import './HeaderSub.css';
import { ZComponentHeader } from './ZComponentHeader';
import { Link } from 'react-router-dom';


export const HeaderSub = ({ setIsActiveNav }) => {
  return (
    <header className="header">

      <div className="header__wrapper contenedor">

        <Link to='/'>
          
          <div className="arrow"> <ArrowHeader /> </div>

        </Link>  

        <nav className="navo">

          <div className="Ulista">  <Ulista setIsActiveNav={setIsActiveNav} />  </div>

        </nav>

        <ZComponentHeader />

      </div>

    </header>
  );
};
