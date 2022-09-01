import { useState } from "react";
import { useFetch } from "../shared/hooks/useFetch";
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
    pageSelect: "",
  });
  const [developmentPageCardDataSelect, setdevelopmentPageCardDataSelect] =
    useState({
      title: "",
      price: "",
      pageSelect: "",
    });
  const [marketingPageCardDataSelect, setmarketingPageCardDataSelect] =
    useState({
      title: "",
      price: "",
      pageSelect: "",
    });

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

  const listPrice = [
    Number(desingPageCardDataSelect.price),
    Number(developmentPageCardDataSelect.price),
    Number(marketingPageCardDataSelect.price),
  ];

  let totalAmount = listPrice.reduce((a, b) => a + b, 0);

  const totalAmountPayment = {
    totalAmount,
  };

  const allDataUserPayment = [
    desingPageCardDataSelect,
    developmentPageCardDataSelect,
    marketingPageCardDataSelect,
  ];

  const PaymentCtx = {
    developmentPageCardDataSelect,
    setdevelopmentPageCardDataSelect,
    desingPageCardDataSelect,
    setdesingPageCardDataSelect,
    setmarketingPageCardDataSelect,
    marketingPageCardDataSelect,
    allDataUserPayment,
    totalAmountPayment,
  };

  const { statehttp: datadesingCards } = useFetch(
    "https://nc-digitize.herokuapp.com/api/cards?categoria=design"
  );
  const { statehttp: datadevCards } = useFetch(
    "https://nc-digitize.herokuapp.com/api/cards?categoria=dev "
  );
  const { statehttp: datamarketingCards } = useFetch(
    "https://nc-digitize.herokuapp.com/api/cards?categoria=marketing"
  );

  const httpsCardsctx = {
    datadesingCards,
    datadevCards,
    datamarketingCards,
  };

  return (
    <GlobalContext.Provider
      value={{ UIstate, AuthCtx, PaymentCtx, httpsCardsctx }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
