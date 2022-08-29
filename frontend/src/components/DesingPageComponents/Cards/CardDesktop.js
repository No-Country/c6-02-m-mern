import Card from "./Card";

const CardDesktop = () => {
  return (
    <div className="flex-container">
      <Card
        titulo={"Bronce"}
        include={"include"}
        page={"Landing page design"}
        precio={"$ 1.000"}
      />
      <Card
        titulo={"Silver"}
        include={"include"}
        page={"Landing page design"}
        precio={"$ 3.000"}
      />
      <Card
        titulo={"Gold"}
        include={"include"}
        page={"Landing page design"}
        precio={"$ 5.000"}
      />
    </div>
  );
};

export default CardDesktop;
