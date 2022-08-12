import React from 'react';
import { InputForm } from './InputForm';
import { LogoContact } from './LogoContact';
import './sectionContact.css';
import { SocialMedia } from './SocialMedia';
export const SectionContact = () => {
  return (
    <div className="SectionContact">
      <h3>Contact us </h3>
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
