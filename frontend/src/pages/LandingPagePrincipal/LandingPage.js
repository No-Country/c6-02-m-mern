import React from 'react';
import { Header } from '../../components/LandingPageComponents/header/Header';
import { SectionHero } from '../../components/LandingPageComponents/hero/SectionHero';

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <SectionHero />
    </div>
  );
};
