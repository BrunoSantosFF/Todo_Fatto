import {db} from '../database/db.js'

//recebendo tarefas
export const getTarefas = (req, res) => {
  const query = "SELECT * FROM tarefas ORDER BY ordem";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

//adicionando tarefas
export const addTarefa = (req, res) => {
  const query = "INSERT INTO tarefas (nome, custo, data_limite) VALUES (?, ?, ?)";
  const values = [req.body.nome, req.body.custo, req.body.datalimite];

  db.query(query, values, (err, data) => {
    if (err) return res.json(err);
    return res.status(201).json({ message: "Tarefa adicionada com sucesso!" });
  });
};

//atualizando tarefa
export const updateTarefa = (req, res) => {
  const query = "UPDATE tarefas SET nome = ?, custo = ?, data_limite = ? WHERE id = ?";
  const values = [req.body.nome, req.body.custo, req.body.datalimite, req.params.id];

  db.query(query, values, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
  });
};

//deletando tarefa
export const deleteTarefa = (req, res) => {
  const query = "DELETE FROM tarefas WHERE id = ?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json({ message: "Tarefa deletada com sucesso!" });
  });
};
