import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((toDo) => (
          <ToDo
            toDo={toDo}
            toDos={toDos}
            setToDos={setToDos}
            text={toDo.text}
            id={toDo.id}
            key={toDo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
