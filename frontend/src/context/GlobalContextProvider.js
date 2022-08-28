import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isModalActive, setisModalActive] = useState(false);

  // auth

  const [isLogIn, setisLogIn] = useState(false);

  const UIstate = {
    isActiveNav,
    setIsActiveNav,
    isModalActive,
    setisModalActive,
  };

  const handlerLogIn = () => {
    setisLogIn(true);
  };

  const handlerLogout = (e) => {
    e.preventDefault();
    setisLogIn(false);
  };
  const AuthCtx = {
    handlerLogIn,
    handlerLogout,
    isLogIn,
  };

  return (
    <GlobalContext.Provider value={{ UIstate, AuthCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
