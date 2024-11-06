import React, { useState } from 'react';

function AddTarefaForm({ addTarefa }) {
  const [nome, setNome] = useState('');
  const [custo, setCusto] = useState('');
  const [data_limite, setDatalimite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTarefa({ nome, custo, data_limite });
    setNome('');
    setCusto('');
    setDatalimite('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome da Tarefa" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Custo" 
        value={custo} 
        onChange={(e) => setCusto(e.target.value)} 
      />
      <input 
        type="date" 
        value={data_limite} 
        onChange={(e) => setDatalimite(e.target.value)} 
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddTarefaForm;
