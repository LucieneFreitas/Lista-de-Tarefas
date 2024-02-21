import React, { useState, useEffect } from "react";
import "./TodoList.css";
import Icon from "./assets/iconColor.png";

function TodoList() {

  const listaStorage = localStorage.getItem('lista');

  const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
  const [novoItem, setNovoItem] = useState("");

  useEffect(() =>{
    localStorage.setItem('lista', JSON.stringify(lista))
  }, [lista]);

  function adicionarItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isComplete: false }]);
    setNovoItem("");
    document.getElementById("input-entrada").focus();
  }

  function click(index) {
    const listAux = [...lista];
    listAux[index].isComplete = !listAux[index].isComplete;
    setLista(listAux);
  }

  function deletar(index) {
    const listAux = [...lista];
    listAux.splice(index, 1);
    setLista(listAux);
  }

  function deleteAll() {
    setLista([]);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarItem}>
        <input
          id="input-entrada"
          type="text"
          value={novoItem}
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>

      {/*Adicionar tarefas */}
      <div className="listaTarefas">
        {lista.length < 1 ? (
          <div className="container">
            <img src={Icon} />
          </div>
        ) : (
          lista.map((item, index) => (
            <div
              key={index}
              className={item.isComplete ? "itemCompleto" : "item"}
            >
              <span
                onClick={() => {
                  click(index);
                }}
              >
                {item.text}
              </span>
              <button
                onClick={() => {
                  deletar(index);
                }}
                className="del"
              >
                Deletar
              </button>
            </div>
          ))
        )}

 <div className="containerButton">
        {lista.length > 0 && (
          <button
            onClick={() => {
              deleteAll();
            }}
            className="deleteAll"
          >
            Deletar Todas
          </button>
        )}
        </div>
        
      </div>
    </div>
  );
}

export default TodoList;
