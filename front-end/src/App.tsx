import { useState } from "react";
import { Dice } from "./components/dice/dice";
import d2png from "./assets/D2.png";
import d4png from "./assets/D4.png";
import d6png from "./assets/D6.png";
import d8png from "./assets/D8.png";
import d10png from "./assets/D10.png";
import d12png from "./assets/D12.png";
import d20png from "./assets/D20.png";
import DirLogo from "./assets/DirLogo2.png";
import { rollDice } from "./services/api";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

// tipos do typescript para gerenciar os estados da aplicação
type diceConfig = {
  diceType: string;
  img: string;
};

type rolling = {
  diceType: string;
  result: number;
  timestamp: string;
};


// essa lista existe pra renderizar nossos dados de forma dinamica 
const dices = [
  { diceType: "D2", img: d2png },
  { diceType: "D4", img: d4png },
  { diceType: "D6", img: d6png },
  { diceType: "D8", img: d8png },
  { diceType: "D10", img: d10png },
  { diceType: "D12", img: d12png },
  { diceType: "D20", img: d20png },
];

export default function App() {
  const [selectedDice, setSelectedDice] = useState<diceConfig>(dices[0]);
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<rolling[]>([]);
  const [loading, setloading] = useState(false);

  const handleSelectDice = (dice: diceConfig) => {
    setSelectedDice(dice);
    setResult(null); // limpa o result ao trocar de dado
  };

  // função pra limpar o histórico de rolagens
  const cleanHistory = () => {
    setHistory([]);
  };

  // o coração dessa página: aqui acontece a comunicação com o back-end via nossos services do front-end
  const handleRoll = async () => {
    setloading(true);
    try {
      const data = await rollDice(selectedDice.diceType);
      //console.log(data);

      setResult(data.result);
      setHistory((prev) => [
        ...prev,
        {
          diceType: selectedDice.diceType,
          result: data.result,
          timestamp: new Date().toLocaleString("pt-BR"),
        },
      ]);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="mainContainer">
      <Navbar className="navbar">
        <Container fluid className="navbarContent">
          <Navbar.Brand href="https://directy.com.br" className="logoContainer">
            <img src={DirLogo} className="logo-directy" alt="Directy Logo" />
          </Navbar.Brand>

          <h3 className="navbarTitle">ROLL THE DICE</h3>

          <div className="navbarSpacer"></div>
        </Container>
      </Navbar>

      <div className="buttonsList">
        {dices.map((d) => (
          <button key={d.diceType} onClick={() => handleSelectDice(d)}>
            {d.diceType}
          </button>
        ))}
      </div>

      <div className="diceRollGame">
        <Dice diceType={selectedDice.diceType} img={selectedDice.img} />

        <div className="resultContainer">
          <p>Resultado</p>
          <p className="resultText">{result ?? " "}</p>
          <button className="resultButton" onClick={handleRoll}>
            Rolar {selectedDice.diceType}
          </button>
        </div>

        <div className="historyContainer">
          <p>Histórico</p>
          <div className="historyList">
            {history.map((r, i) => (
              <p key={i}>
                {r.diceType}: {r.result} — {r.timestamp}
              </p>
            ))}
          </div>

          <button onClick={() => cleanHistory()}>Limpar</button>
        </div>
      </div>

      <div className="footer">
        <p className="footerText">Developed by Eloisa Pajehu</p>
      </div>
    </div>
  );
}
