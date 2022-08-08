import React from 'react';
import { List } from './List';

export const Ulist = ({ setIsActiveNav }) => {
  const links = [
    { id: 1, text: 'digitize ' },
    { id: 2, text: 'about ' },
    { id: 3, text: 'contact us ' },
  ];

  return (
    <ul className="Ulist">
      {links.map((link) => {
        return (
          <List
            key={link.id}
            text={link.text}
            setIsActiveNav={setIsActiveNav}
          />
        );
      })}
    </ul>
  );
};
