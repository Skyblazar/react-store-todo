import { useState } from "react";
import "./Todo.page.css";

export const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: crypto.randomUUID() },
  ]);

  return (
    <div id="todo-page">
      <h1>Todos</h1>

      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}

      <button
        onClick={() =>
          setTodos((todos) =>
            todos.concat({ id: crypto.randomUUID(), text: crypto.randomUUID() })
          )
        }
      >
        <strong>+</strong> Add Todo
      </button>
    </div>
  );
};
