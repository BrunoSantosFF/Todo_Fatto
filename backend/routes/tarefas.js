import express from "express"
import { getTarefas, addTarefa, updateTarefa,deleteTarefa } from '../controllers/tarefa.js';


const router = express.Router()

router.get('/', getTarefas);
router.post('/tarefas', addTarefa);
router.put('/tarefas/:id', updateTarefa);
router.delete('/tarefas/:id', deleteTarefa);


export default router 
