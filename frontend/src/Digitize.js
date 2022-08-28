import React, { useContext } from "react";
import { LandingPage } from "./pages/LandingPagePrincipal/LandingPage";
import { Routes, Route } from "react-router-dom";
import { DesingPacksPage } from "./pages/desingpacksPage/DesingPacksPage";
import { DevelopmentPacksPage } from "./pages/developmentPacksPage/DevelopmentPacksPage";
import { MarketinPacksPage } from "./pages/marketinPage/MarketinPacksPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { PaymentPage } from "./pages/paymentPage/PaymentPage";
import { PageOurWork } from "./pages/ourWorkPage/PageOurWork";
import { ConfirmationPage } from "./pages/confirmationPage/ConfirmationPage";
import { ControlPanelPage } from "./pages/ControlPanel/ControlPanelPage";
import { GlobalContext } from "./context/GlobalContext";
import Auth from "./pages/authPage/Auth";

export const Digitize = () => {
  const { AuthCtx } = useContext(GlobalContext);

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
        {AuthCtx.isLogIn && (
          <Route path="control-panel-admin" element={<ControlPanelPage />} />
        )}
        <Route path="payment-page" element={<PaymentPage />} />
        <Route path="confirmation-page" element={<ConfirmationPage />} />
        <Route path="our-work" element={<PageOurWork />} />
        <Route path="adminlogin-page" element={<Auth />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
};
