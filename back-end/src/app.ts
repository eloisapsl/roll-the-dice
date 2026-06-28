import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import morgan from "morgan";
import diceRoutes from "./routes/index"

const app = express();

// utilizado para logs das requisições do back-end
app.use(morgan("tiny"));

// utilizado para comunicação entre front e back de forma segura
app.use(cors());


app.use(express.json());

app.use('/api/v1', diceRoutes);

export default app;

