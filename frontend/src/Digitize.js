import React, { useState } from "react";
import { LandingPage } from "./pages/LandingPagePrincipal/LandingPage";
import { Routes, Route } from "react-router-dom";
import { DesingPacksPage } from "./pages/desingpacksPage/DesingPacksPage";
import { DevelopmentPacksPage } from "./pages/developmentPacksPage/DevelopmentPacksPage";
import { MarketinPacksPage } from "./pages/marketinPage/MarketinPacksPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { PaymentPage } from "./pages/paymentPage/PaymentPage";

export const Digitize = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  return (
    <>
      <Routes>
        <Route path="about-page" element={<AboutPage />} />
        <Route path="contact-page" element={<ContactPage />} />
        <Route
          path="/"
          element={
            <LandingPage
              setIsActiveNav={setIsActiveNav}
              isActiveNav={isActiveNav}
            />
          }
        />
        <Route
          path="desing-packs-page"
          element={<DesingPacksPage setIsActiveNav={setIsActiveNav} />}
        />
        <Route
          path="development-packs-page"
          element={<DevelopmentPacksPage />}
        />
        <Route path="marketin-packs-page" element={<MarketinPacksPage />} />
        <Route path="payment-page" element={<PaymentPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
};
