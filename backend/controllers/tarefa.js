import {db} from '../database/db.js'


export const getTarefas = (req, res) => {
  const query = "select * from tarefas"

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data)
  })
}

