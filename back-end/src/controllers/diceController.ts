import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import diceService from '../services/diceService';

// controla as requisições que chegam pro nosso back-end e retornam os status correspondentes ao processamento
const diceController = {
     rollDice(req: Request, res: Response, next: NextFunction)
    {
        try{
            
        // valida o body da nossa request com o express-validator 
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({message: "Dado inválido. Escolha outro dado."});
        }
        
        // aqui preferi criar um serviço para controlar a lógica de calculo do dado,
        // pois ela pode mudar caso a aplicação cresça
        const result =  diceService.rollDice(req.body);

        return res.status(200).json(result);

        } catch(error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }
  
    }
}

export default diceController;