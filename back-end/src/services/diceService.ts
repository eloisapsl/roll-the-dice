

// Determina o tipo de objeto recebido pela função "rollDice", 
// é como um contrato que estabelecemos entre o front e o back sobre o tipo de dado recebido
interface rollDiceDTO {
  diceType: string;
}

// Serviço para cálculos e demais regras da nossa rolagem de dados
const diceService = {
   rollDice(data: rollDiceDTO) {

    const chosenDiceType = data.diceType;

    let sidesNumber = parseInt(chosenDiceType.slice(1, chosenDiceType.length))

    const result = Math.floor(Math.random() * sidesNumber) + 1;

    // após a logica, retornamos um objeto para o controller manipular esse retorno
    return {
        chosenDiceType: chosenDiceType,
        result: result,
    }

  },
  }

export default diceService;