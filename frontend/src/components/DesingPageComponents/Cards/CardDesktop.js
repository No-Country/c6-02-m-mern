import { useState } from "react";
import Card from "./Card";

const cardsDataDUMMY = [
  {
    id: "1dev",
    titulo: "Bronce",
    include: "include",
    page: "Landing page design",
    precio: "$ 1.000",
  },
  {
    id: "2dev",
    titulo: "Silver",
    include: "include",
    page: "Landing page design",
    precio: "$ 3.000",
  },
  {
    id: "3dev",
    titulo: "Gold",
    include: "include",
    page: "Landing page design",
    precio: "$ 5.000",
  },
];

const CardDesktop = (props) => {
  return (
    <div className="flex-container">
      {cardsDataDUMMY.map((card) => {
        return (
          <Card
            key={card.id}
            id={props.pagetype + card.id}
            titulo={card.titulo}
            include={card.include}
            page={card.page}
            precio={card.precio}
            onActive={props.onActive}
          />
        );
      })}
    </div>
  );
};

export default CardDesktop;
