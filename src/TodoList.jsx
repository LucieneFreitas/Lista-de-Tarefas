import React from "react";
import "./TodoList.css";

function TodoList() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input
         type="text"
         placeholder="Adicione uma tarefa"
         />
         <button type='submit'></button>
      </form>
    </div>
  );
}

export default TodoList;
