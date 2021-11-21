import React from "react";
import Todo from "./Todo";
import "../style/TodoList.css";

// add the todos here
function TodoList({ todos, setTodos, filteredTodos }) {
  // console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo} //this is the todo object created on line 10 for mapping todos
            setTodos={setTodos}
          />
        ))}
      </ul>
      {/* we have to give a unique key to the todo which is the todo id */}
    </div>
  );
}

export default TodoList;
