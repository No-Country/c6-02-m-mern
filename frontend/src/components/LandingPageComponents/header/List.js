import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

export const List = ({ text, path }) => {
  const { setIsActiveNav } = useContext(GlobalContext);
  const handlerClickLinkClose = () => {
    setIsActiveNav(false);
  };

  return (
    <li className="Ulist__list" onClick={handlerClickLinkClose}>
      <Link className="Ulist__link" to={path}>
        {text}
      </Link>
    </li>
  );
};
