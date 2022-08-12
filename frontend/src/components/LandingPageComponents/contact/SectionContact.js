import React from 'react';
import { InputForm } from './InputForm';
import { LogoContact } from './LogoContact';
import './sectionContact.css';
import { SocialMedia } from './SocialMedia';
export const SectionContact = () => {
  return (
    <div className="SectionContact">
      <div className="SectionContact-header">
        <h3 className="SectionContact-header__title ">
          <span className="color-yellow">Contact</span> us!
        </h3>
      </div>
      <div className="SectionContact__wrapper-main">
        <div>
          <SocialMedia />
          <LogoContact />
        </div>
        <div>
          <InputForm />
        </div>
      </div>
    </div>
  );
};
