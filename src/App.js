
import React, { useState, useEffect } from "react";
import FormTodo from "./components/FormTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import "./App.css";

function App() {
  // use states
  const [inputText, setInputText] = useState("");
  //* to store the array of todos, create another usestate
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // This will run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // use Effect
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // * function to filter the todos to completed and not completed
  const filterHandler = (e) => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save your todos to local storage
  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="whole">
      <div className="mx-auto cont">
        <Header />
        <FormTodo
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          inputText={inputText}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
