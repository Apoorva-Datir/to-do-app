import React from "react";
import "../style/FormTodo.css";
function FormTodo({ todos, setTodos, setInputText, inputText, setStatus }) {
  // this function is to get the value of todo entered in input field
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  // this function is created to display our todos when we click on + button
  const submitTodoHandler = (e) => {
    e.preventDefault(); // this is to prevent the page from reloading when we click on + button
    if (!inputText) return;
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  

  // *function to check the status of todos => completed, not completed, all
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="wrapper-form">
          <div className="inp-subm">
            <input
              type="text"
              value={inputText}
              className="todo-input"
              onChange={inputTextHandler}
              placeholder="Enter your TODOS"
            />
            <button
              className="todo-button"
              type="submit"
              onClick={submitTodoHandler}
            >
              Add
            </button>
          </div>
          
            <div className="select-filter">
              <select
                name="todos"
                className="filter-todo"
                onChange={statusHandler}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
         
        </div>
      </form>
    </div>
  );
}

export default FormTodo;
