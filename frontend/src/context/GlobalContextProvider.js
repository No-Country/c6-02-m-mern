import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isModalActive, setisModalActive] = useState(false);

  // auth

  const [token, setToken] = useState(false);

  // circle bar

  const [isCardActive, setisCardActive] = useState(false);

  // activeLinie;

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

  return (
    <GlobalContext.Provider value={{ UIstate, AuthCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
