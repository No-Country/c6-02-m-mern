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

  const handlerLogout = () => {
    setisLogIn(false);
  };
  const Auth = {
    handlerLogIn,
    handlerLogout,
  };

  console.log(isLogIn);

  return (
    <GlobalContext.Provider value={{ UIstate, Auth }}>
      {children}
    </GlobalContext.Provider>
  );
};
