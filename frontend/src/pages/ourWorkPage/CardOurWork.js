import React from "react";
import "./cardOurWork.css";
export const CardOurWork = (props) => {
  return (
    <div className="card-ourWork">
      <p className="card-ourWork__description">{props.title}</p>

      <div className="card-ourWork__imgWrapper">
        <img src={props.image} className="card-ourWork__imgWrapper__img" />
      </div>
    </div>
  );
};
