import { Router } from 'express';
import diceRoutes from "./diceRoutes"

const router = Router();

router.use(diceRoutes);

export default router;