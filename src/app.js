import express from "express";
import cors from "cors";
import choiceRouter from "./Routes/choice.routes.js";
import pollRouter from "./Routes/poll.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(pollRouter);
app.use(choiceRouter);

//criar o env DATABASE_URL=mongodb://localhost:27017/moodboard
const port = process.env.PORT ;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));