import "./ModalInfo.css";

const ModalInfo = (props) => {
  return (
    <div className={`ModalInfo ${props.className}`}>
      <img
        src={props.img}
        alt={props.alt}
        className="ModalInfo__icon"
        onClick={props.close}
      />
      <h4 className="ModalInfo__title">
        {props.title} <span>{props.success}</span>
      </h4>
      <p className="ModalInfo__parrafo">{props.parrafo}</p>
    </div>
  );
};

export default ModalInfo;
