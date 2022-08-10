import React from 'react';
import { LandingPage } from './pages/LandingPagePrincipal/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/LandingPageComponents/header/Header';
import { DesingPacksPage } from './pages/desingpacksPage/DesingPacksPage';
import { DevelopmentPacksPage } from './pages/developmentPacksPage/DevelopmentPacksPage';
import { MarketinPacksPage } from './pages/marketinPage/MarketinPacksPage';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { ContactPage } from './pages/contactPage/ContactPage';

export const Digitize = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="about-page" element={<AboutPage />} />
        <Route path="contact-page" element={<ContactPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="desing-packs-page" element={<DesingPacksPage />} />
        <Route
          path="development-packs-page"
          element={<DevelopmentPacksPage />}
        />
        <Route path="marketin-packs-page" element={<MarketinPacksPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
};
