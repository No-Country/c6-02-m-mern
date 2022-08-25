import React from "react";

import "./Card.css";

const CardStyle = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default CardStyle;
