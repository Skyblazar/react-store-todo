import "./Todo.page.css";
import { useStoreProperty } from "@skyblazar/react-store";
import { todosStore } from "../stores/todos.store";
import { chance } from "../utils";

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
        <div
          key={todo.id}
          className="todo"
          onClick={() =>
            setTodos(({ todos }) =>
              todos.map((t) => (todo.id === t.id ? { ...t, done: !t.done } : t))
            )
          }
        >
          <input type="checkbox" checked={todo.done ?? false} readOnly />
          <span style={{ flex: 1 }}>{todo.text}</span>
          <span
            className="delete"
            onClick={() =>
              setTodos(({ todos }) => todos.filter(({ id }) => id !== todo.id))
            }
          >
            x
          </span>
        </div>
      ))}

      <button
        onClick={() =>
          setTodos(({ todos }) =>
            todos.concat({
              id: chance.guid(),
              text: `${chance.name()} - ${chance.sentence()}`,
            })
          )
        }
      >
        <strong>+</strong> Add Todo
      </button>
    </div>
  );
};
