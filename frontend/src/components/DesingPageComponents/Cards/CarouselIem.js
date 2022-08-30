import React from "react";

const CarouselIem = ({ clases, title, include, landing, price }) => {
  return (
    <div className={clases}>
      <h2>{title}</h2>
      <h3>{include}</h3>
      <p>{landing}</p>
      <div className="precio">
        <h3 className="price">
          <span className="chose"> Chose :</span>
          {price}
        </h3>
      </div>
    </div>
  );
};

export default CarouselIem;
