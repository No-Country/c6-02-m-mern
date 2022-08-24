import React from "react";
import "./Card.css";

const Card = ({ titulo, include, page, precio }) => {
  return (
    <div class="card-tarjetas ">
      <div class="card-body">
        <h2>{titulo}</h2>
        <h3 className="include">{include}</h3>
        <p className="colorText">{page}</p>
        <div className="precio">
          <h3 className="costo">Chose: {precio}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
