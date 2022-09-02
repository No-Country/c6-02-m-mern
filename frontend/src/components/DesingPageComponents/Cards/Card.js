import "./Card.css";

const Card = ({ titulo, include, page, precio, onActive, id }) => {
  return (
    <div className="card" onClick={onActive}>
      <h3 className="card__title">{titulo}</h3>
      <p className="card__includes-paragraph">{include}</p>

      <p className="card__description">{`Landing  ${page}`}</p>
      <div className="card__wrapper-price">
        <p className="card__wrapper__chose">chose</p>
        <p className="card__wrapper__exchange">$</p>
        <p className="card__wrapper__price">{precio}</p>
      </div>
    </div>
  );
};

export default Card;
