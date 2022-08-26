import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

export const List = ({ text, path }) => {
  const { UIstate } = useContext(GlobalContext);
  const handlerClickLinkClose = () => {
    UIstate.setIsActiveNav(false);
  };

  return (
    <li className="Ulist__list" onClick={handlerClickLinkClose}>
      <Link className="Ulist__link" to={path}>
        {text}
      </Link>
    </li>
  );
};
