import "./Card.css";

const Card = ({ titulo, include, page, precio, onActive, id }) => {
  return (
    <div className={`card-tarjetas`} onClick={onActive}>
      <div className="card-body">
        <h2 id={id} className="titleH2">
          {titulo}
        </h2>
        <h3 className="include">{include}</h3>
        <p className="colorText">{page}</p>
        <div className="precio">
          <h3 className="costo">
            <span className="choseColor">Chose..</span>
            <span className="choseColor">{precio}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
