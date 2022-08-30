import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isModalActive, setisModalActive] = useState(false);

  // auth

  const [token, setToken] = useState(false);

  const [isCardActive, setisCardActive] = useState(false);

  // payment

  const [desingPageCardDataSelect, setdesingPageCardDataSelect] = useState({
    title: "",
    price: "",
  });
  const [developmentPageCardDataSelect, setdevelopmentPageCardDataSelect] =
    useState({
      title: "",
      price: "",
    });
  const [marketingPageCardDataSelect, setmarketingPageCardDataSelect] =
    useState({
      title: "",
      price: "",
    });

  const allDataUserPayment = [
    desingPageCardDataSelect,
    developmentPageCardDataSelect,
    marketingPageCardDataSelect,
  ];

  const UIstate = {
    isActiveNav,
    setIsActiveNav,
    isModalActive,
    setisModalActive,
    isCardActive,
    setisCardActive,
  };

  const handlerLogIn = (token) => {
    setToken(token);
  };

  const handlerLogout = (e) => {
    e.preventDefault();
    setToken(null);
  };
  const AuthCtx = {
    handlerLogIn,
    handlerLogout,
    isLogIn: !!token,
    token,
  };

  const PaymentCtx = {
    developmentPageCardDataSelect,
    setdevelopmentPageCardDataSelect,
    desingPageCardDataSelect,
    setdesingPageCardDataSelect,
    setmarketingPageCardDataSelect,
    marketingPageCardDataSelect,
    allDataUserPayment,
  };

  return (
    <GlobalContext.Provider value={{ UIstate, AuthCtx, PaymentCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
