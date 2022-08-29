import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Card.css";

const Card = ({ titulo, include, page, precio }) => {
  const { UIstate } = useContext(GlobalContext);
  const handlerActiveCard = () => {
    UIstate.setisCardActive(true);
  };
  return (
    <div className={`card-tarjetas`} onClick={handlerActiveCard}>
      <div className="card-body">
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
