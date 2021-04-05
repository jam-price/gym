import React, { useState, useEffect } from "react";
import "./App.css";
// components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);
  // Only run once when app starts
  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [toDos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(toDos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredToDos(toDos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  // Save the todo list as string in local storage
  const saveLocalToDos = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  };

  const getLocalToDos = () => {
    // If there are no toDos set localStorage with an empty array
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      // If there are some get them and parse them from strings to JSON, then save to state
      let toDoLocal = localStorage.getItem("toDos", JSON.stringify(toDos));
      let parsedToDoLocal = JSON.parse(toDoLocal);
      setToDos(parsedToDoLocal);
    }
  };

  return (
    <div className="App">
      <header>James's To Do List</header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setToDos={setToDos}
        toDos={toDos}
        setStatus={setStatus}
      />
      <ToDoList
        status={status}
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
