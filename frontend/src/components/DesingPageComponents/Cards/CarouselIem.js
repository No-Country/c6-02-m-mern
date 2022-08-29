import React from "react";

const CarouselIem = ({ clases, title, include, landing, price }) => {
  return (
    <div className={clases}>
      <h2>{title}</h2>
      <h3>{include}</h3>
      <p>{landing}</p>
      <hr />
      <h3 className="precio">{price}</h3>
    </div>
  );
};

export default CarouselIem;
