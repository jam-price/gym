import React from "react";

const ToDo = ({ text, toDos, toDo, setToDos, id }) => {
  const deleteHandler = () => {
    setToDos(toDos.filter((el) => el.id !== id));
  };

  const completeHandler = () => {
    setToDos(
      toDos.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${toDo.completed? 'completed' : '' }`}>{text}</li>
      <button onClick={completeHandler} className={`complete-btn ${toDo.completed? 'complete-btn-add' : ''}`}>
        {toDo.completed ? (
          <i className="fas fa-plus"></i>
        ) : (
          <i className="fas fa-check"></i>
        )}
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
