import React from "react";
import { LandingPage } from "./pages/LandingPagePrincipal/LandingPage";
import { Routes, Route } from "react-router-dom";
import { DesingPacksPage } from "./pages/desingpacksPage/DesingPacksPage";
import { DevelopmentPacksPage } from "./pages/developmentPacksPage/DevelopmentPacksPage";
import { MarketinPacksPage } from "./pages/marketinPage/MarketinPacksPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { PaymentPage } from "./pages/paymentPage/PaymentPage";
import { PageOurWork } from "./pages/ourWorkPage/PageOurWork";
import Auth from "./pages/authPage/Auth";
import { ConfirmationPage } from "./pages/confirmationPage/ConfirmationPage";

export const Digitize = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="contact-page" element={<ContactPage />} />
        <Route path="desing-packs-page" element={<DesingPacksPage />} />
        <Route
          path="development-packs-page"
          element={<DevelopmentPacksPage />}
        />
        <Route path="marketin-packs-page" element={<MarketinPacksPage />} />
        <Route path="payment-page" element={<PaymentPage />} />
        <Route path="confirmation-page" element={<ConfirmationPage />} />
        <Route path="our-work" element={<PageOurWork />} />
        <Route path="adminlogin-page" element={<Auth />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
};
