import express from "express"
import { getTarefas } from '../controllers/tarefa.js';


const router = express.Router()

router.get('/', getTarefas)

export default router 
