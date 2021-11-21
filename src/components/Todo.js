import React from "react";
import "../style/Todo.css";

function Todo({ text, todo, todos, setTodos }) {
  // * add event for delete todo
  const deleteTodo = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
    // console.log(todo);
  };

  //*add event for complete todo
  const completeTodo = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        // if id didint match just return the element
        return element;
      })
    );
  };

  return (
    <div className="lists-todo">
      <button className={`complete-btn ${todo.completed ? "active" : null}`} onClick={completeTodo}>
        <i className="fas fa-check"></i>
      </button>
      <div className="li-info">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      </div>
      <button className="delete-btn" onClick={deleteTodo}>
      
      <i className="fas fa-times" style={{width:"15px"}}></i>
      </button>
    </div>
  );
}

export default Todo;
