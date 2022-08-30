import React from "react";
import { Link } from "react-router-dom";
import "./FinalConfirmation.css";

export const FinalButton = () => {
  return (
    <div>
      <Link to={"/contact-page"}>
        <button className="buttonContactUs">CONTACT US</button>
      </Link>
    </div>
  );
};
