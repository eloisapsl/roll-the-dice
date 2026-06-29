import { Router } from 'express';
import { body } from 'express-validator';
import diceController from '../controllers/diceController';

const router = Router();

/* valida se o corpo da requisição é valido e verifica se o tipo de dado enviado existe na lista! 

** (um colega dev usou isso em um projeto da faculdade e achei bacana) */
const diceTypesValidator = [
  body('diceType')
    .isIn(["D2", "D4", "D6", "D8", "D10", "D12", "D20"])
    .withMessage('Tipo de dado inválido.')
];

// define a rota e o método a ser usado na nossa requisição
router.post('/roll', diceTypesValidator, diceController.rollDice);

export default router;