import "./styles.css";


// esse componente é utilizado para renderizar dinamicamente as imagens de cada dado 
// e dizer pra nossa aplicação qual dado está selecionado via props!
type diceProps = {
  diceType: string;
  img: string;
};

export function Dice({ diceType, img }: diceProps) {
  return (
    <div className="diceContainer">
      <div className="imgContainer">
        <img className="diceImg" src={img} alt={diceType} /> 
      </div>
    </div>
  );
}
