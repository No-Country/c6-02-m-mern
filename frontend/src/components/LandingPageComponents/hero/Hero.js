import React from 'react';
import concentrationhero from '../../../assets/images/concentration-hero.png';
import { Button } from '../../../UI/Button';
import './hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero__img"
        src={concentrationhero}
        alt="concentrated man"
      />
      <div className="hero-content">
        <div className="hero-content-text-wrapper">
          <p className="hero-content-text-wrapper__paragraph">
            <span>DIGITIZE</span> YOUR BUSINESS NOW AND <span>REACH</span> NEW
            CUSTOMERS THROUGH THE INTERNET
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};
