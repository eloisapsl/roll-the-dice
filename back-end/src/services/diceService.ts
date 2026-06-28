

// Determina o tipo de objeto recebido pela função "rollDice"
interface rollDiceDTO {
  diceType: string;
}

// Serviço para cálculos e demais regras da nossa rolagem de dados
const diceService = {
   rollDice(data: rollDiceDTO) {

    const chosenDiceType = data.diceType;

    let sidesNumber = parseInt(chosenDiceType.slice(1, chosenDiceType.length))

    const result = Math.floor(Math.random() * sidesNumber) + 1;

    const currentDate = new Date().toISOString();

    return {
        chosenDiceType: chosenDiceType,
        result: result,
        timestamp: currentDate
    }

  },
  }

export default diceService;