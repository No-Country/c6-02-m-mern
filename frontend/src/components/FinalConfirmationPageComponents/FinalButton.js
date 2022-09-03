import React from "react";
import { Link } from "react-router-dom";
import "./FinalConfirmation.css";

export const FinalButton = () => {
  return (
    <div>
      <Link to={"/contact-page"}>
        <p className="buttonContactUs">CONTACT US</p>
      </Link>
    </div>
  );
};
