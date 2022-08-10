import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ text, setIsActiveNav, path }) => {
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
