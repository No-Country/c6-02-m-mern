import React from "react";

export const CardDiscover = (props) => {
  return (
    <div className="cardDiscover">
      <img src={props.image} className="cardDiscover__img" alt={props.alt} />
      <p className="cardDiscover__paragraph">
        {props.description}
        <span className="color-yellow">{props.extraDes}</span>
      </p>
    </div>
  );
};
