import Card from "./Card";

import "./CardDesktop.css";

const CardDesktop = (props) => {
  return (
    <div className="flex-container">
      {props.data &&
        props.data.map((card) => {
          return (
            <Card
              key={card._id}
              id={card._id}
              titulo={card.titulo}
              include={card.include}
              page={card.categoria}
              precio={card.precio}
              onActive={props.onActive}
            />
          );
        })}
    </div>
  );
};

export default CardDesktop;
