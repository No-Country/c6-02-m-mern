import "./Card.css";

const Card = ({ titulo, include, page, precio, onActive, id }) => {
  return (
    <div className={`card-tarjetas`} onClick={onActive}>
      <div className="card-body">
        <h2 id={id}>{titulo}</h2>
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
