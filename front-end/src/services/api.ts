import axios from 'axios';

// esse arquivo é a central de comunicação do nosso front-end com a API, é aqui que fazemos a requisição 
// e enviamos o retorno para a pagina principal
const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function rollDice (diceType: string){
    try{
    const res = await api.post('/roll', {diceType: `${diceType}`});
    return res.data;
    } catch(error)
    {
        console.error('Erro ao enviar requisição.', error);
        throw error;
    }

}
