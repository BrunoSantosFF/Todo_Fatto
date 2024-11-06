import React from 'react';

function TarefaList({ tarefas, deleteTarefa, setEditingTarefa }) {
  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id}>
          <h2>{tarefa.nome}</h2>
          <p>Custo: {tarefa.custo}</p>
          <p>Data Limite: {tarefa.datalimite}</p>
          <p>Ordem: {tarefa.ordem}</p>
          <button onClick={() => setEditingTarefa(tarefa)}>Editar</button>
          <button onClick={() => deleteTarefa(tarefa.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
}

export default TarefaList;
