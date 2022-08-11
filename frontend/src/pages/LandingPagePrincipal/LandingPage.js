import React from 'react';
import { SectionDiscover } from '../../components/LandingPageComponents/Discover/SectionDiscover.';
import { Header } from '../../components/LandingPageComponents/header/Header';
import { SectionHero } from '../../components/LandingPageComponents/hero/SectionHero';

export const LandingPage = ({ setIsActiveNav, isActiveNav }) => {
  return (
    <div className="landingPage">
      <Header setIsActiveNav={setIsActiveNav} isActiveNav={isActiveNav} />
      <SectionHero />
      <SectionDiscover />
    </div>
  );
};
