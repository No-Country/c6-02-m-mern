import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ text, setIsActiveNav, path }) => {
  const handlerClickLinkClose = () => {
    setIsActiveNav(false);
  };

  return (
    <li className="Ulista__list" onClick={handlerClickLinkClose}>
      <Link className="Ulista__link" to={path}>
        {text}
      </Link>
    </li>
  );
};
