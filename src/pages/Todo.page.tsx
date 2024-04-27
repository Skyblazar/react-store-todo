import "./Todo.page.css";
import { useStoreProperty } from "@skyblazar/react-store";
import { todosStore } from "../stores/todos.store";

export const TodoPage = () => {
  const [todos, setTodos] = useStoreProperty(
    todosStore,
    (state) => state.todos,
    "todos"
  );

  console.log(todos);

  return (
    <div id="todo-page">
      <h1>Todos</h1>

      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}

      <button
        onClick={() =>
          setTodos(({ todos }) =>
            todos.concat({ id: crypto.randomUUID(), text: crypto.randomUUID() })
          )
        }
      >
        <strong>+</strong> Add Todo
      </button>
    </div>
  );
};
