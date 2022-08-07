import React from 'react';
import { Hero } from './Hero';

import './SectionHero.css';

export const SectionHero = () => {
  return (
    <div className="sectionHero flex">
      <div className="container ">
        <Hero />
      </div>
    </div>
  );
};
