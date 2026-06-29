import { Router } from 'express';
import diceRoutes from "./diceRoutes"


// o "porteiro" da aplicação: fala pro app.tsx quais rotas existem
const router = Router();

router.use(diceRoutes);

export default router;