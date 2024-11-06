import express from  "express"
import cors from "cors"
import Router from './routes/tarefas.js';


const app = express();

app.use(express.json());
app.use(cors());

app.use('/', Router)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});