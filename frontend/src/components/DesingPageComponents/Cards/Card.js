import "./Card.css";

const Card = ({ titulo, include, page, precio, onActive, id }) => {
  return (
    <div className="card" onClick={onActive}>
      <h3 className="card__title">BRONZE</h3>
      <p className="card__includes-paragraph">INCLUDES</p>

      <p className="card__description">Landing page desing</p>
      <div className="card__wrapper-price">
        <p className="card__wrapper__chose">chose</p>
        <p className="card__wrapper__exchange">$</p>
        <p className="card__wrapper__price">1000</p>
      </div>
    </div>
  );
};

export default Card;
