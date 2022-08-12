import React from "react";

const Card = ({ titulo}) => {

  return (
    <div class="card tarjetas ">
      <div class="card-body">
        <h2>{titulo}</h2>
        <h3>Include</h3>
        <p>Lainding page design</p>
        <hr />
        <h3 className="precio">Chose $ 1.000</h3>
      </div>
    </div>
  );
};

export default Card;
