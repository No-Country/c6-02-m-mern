import React from 'react';

export const List = ({ text, setIsActiveNav }) => {
  const handlerClickLinkClose = () => {
    setIsActiveNav(false);
  };
  return (
    <li className="Ulist__list" onClick={handlerClickLinkClose}>
      <a className="Ulist__link" href="#">
        {text}
      </a>
    </li>
  );
};
