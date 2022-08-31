import React from "react";
import { InputForm } from "./InputForm";
import { LogoContact } from "./LogoContact";
import { SocialMedia } from "./SocialMedia";

import "./sectionContact.css";
export const SectionContact = () => {
  return (
    <>
      <div className="SectionContact">
        <div className="SectionContact-header">
          <h3 className="SectionContact-header__title ">
            <span className="color-yellow">Contact</span> us!
          </h3>
        </div>
        <div className="SectionContact__wrapper-main">
          <div className="wrapper-media">
            <SocialMedia />
            <LogoContact />
          </div>
          <div className="wrapper-input">
            <InputForm />
          </div>
        </div>
      </div>
    </>
  );
};
