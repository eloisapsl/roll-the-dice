import axios from 'axios';


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
