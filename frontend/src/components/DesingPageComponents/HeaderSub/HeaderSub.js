import React from "react";
import { Ulista } from "./ListaDesordenada";
import { ArrowHeader } from "./ArrowHeader.js";
import "./HeaderSub.css";
import { ZComponentHeader } from "./ZComponentHeader";
import { Link } from "react-router-dom";

export const HeaderSub = () => {
  return (
    <header className="header">
      <div className="header__wrapper contenedor">
        <Link to="/">
          <div className="arrow">
            <ArrowHeader />
          </div>
        </Link>

        <nav className="subNav">
          <div className="Ulista">
            {" "}
            <Ulista />
          </div>
        </nav>

        <ZComponentHeader />
      </div>
    </header>
  );
};
