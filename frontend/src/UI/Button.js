import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

export const Button = () => {
  return (
    <Link to="/desing-packs-page" className="button">
      DIGITIZE NOW!
    </Link>
  );
};
