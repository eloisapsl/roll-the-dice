import "./styles.css";

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
