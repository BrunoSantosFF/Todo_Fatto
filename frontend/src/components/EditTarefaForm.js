import React, { useState } from 'react';

function EditTarefaForm({ tarefa, updateTarefa, cancelEdit }) {
  const [nome, setNome] = useState(tarefa.nome);
  const [custo, setCusto] = useState(tarefa.custo);
  const [datalimite, setDatalimite] = useState(tarefa.datalimite);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTarefa(tarefa.id, { nome, custo, datalimite });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <input 
        type="number" 
        value={custo} 
        onChange={(e) => setCusto(e.target.value)} 
      />
      <input 
        type="date" 
        value={datalimite} 
        onChange={(e) => setDatalimite(e.target.value)} 
      />
      <button type="submit">Salvar Alterações</button>
      <button type="button" onClick={cancelEdit}>Cancelar</button>
    </form>
  );
}

export default EditTarefaForm;
