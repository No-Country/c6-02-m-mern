import React from 'react';
import { SectionDiscover } from '../../components/LandingPageComponents/Discover/SectionDiscover.';
import { SectionHero } from '../../components/LandingPageComponents/hero/SectionHero';

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <SectionHero />
      <SectionDiscover />
    </div>
  );
};
