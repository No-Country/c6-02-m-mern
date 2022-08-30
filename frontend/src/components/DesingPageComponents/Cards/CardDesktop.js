import Card from "./Card";

const CardDesktop = (props) => {
  return (
    <div className="flex-container">
      {props.cardsDataDUMMY &&
        props.cardsDataDUMMY.map((card) => {
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
