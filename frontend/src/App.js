import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TarefaList from './components/TarefaList';
import AddTarefaForm from './components/AddTarefaForm';
import EditTarefaForm from './components/EditTarefaForm';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [editingTarefa, setEditingTarefa] = useState(null);

  // Fetch para obter todas as tarefas
  useEffect(() => {
    axios.get('/')
      .then(response => setTarefas(response.data))
      .catch(error => console.error("Erro ao buscar tarefas", error));
  }, []);

  // Função para adicionar uma tarefa
  const addTarefa = (novaTarefa) => {
    axios.post('/', novaTarefa)
      .then(response => {
        setTarefas([...tarefas, response.data]);
      })
      .catch(error => console.error("Erro ao adicionar tarefa", error));
  };

  // Função para editar uma tarefa
  const updateTarefa = (id, atualizaTarefa) => {
    axios.put(`/${id}`, atualizaTarefa)
      .then(() => {
        setTarefas(tarefas.map(tarefa => (tarefa.id === id ? atualizaTarefa : tarefa)));
        setEditingTarefa(null);
      })
      .catch(error => console.error("Erro ao atualizar tarefa", error));
  };

  // Função para deletar uma tarefa
  const deleteTarefa = (id) => {
    axios.delete(`/${id}`)
      .then(() => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      })
      .catch(error => console.error("Erro ao deletar tarefa", error));
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTarefaForm addTarefa={addTarefa} />
      <TarefaList 
        tarefas={tarefas} 
        deleteTarefa={deleteTarefa} 
        setEditingTarefa={setEditingTarefa} 
      />
      {editingTarefa && (
        <EditTarefaForm 
          tarefa={editingTarefa} 
          updateTarefa={updateTarefa} 
          cancelEdit={() => setEditingTarefa(null)} 
        />
      )}
    </div>
  );
}

export default App;
