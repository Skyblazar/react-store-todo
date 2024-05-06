# App to test global state management

This project is a React application that uses the [@skyblazar/react-store](https://www.npmjs.com/package/@skyblazar/react-store) for global state management.

### Code snippets

#### Store creation

```ts
export const todosStore = new Store<TodosStoreState>(
  "todosStore", // store name
  { todos: [], counter: 0 }, // initial state
  {}, // empty actions object
  { serializeOnUpdate: true, unserializeOnCreate: true } // store options
);
```

#### Store usage in react component

```jsx
import { useStoreProperty } from "@skyblazar/react-store";
import { todosStore } from "../stores/todos.store";

export const TodoPage = () => {
  const [todos, setTodos] = useStoreProperty(
    todosStore,
    (state) => state.todos,
    "todos"
  );

  return (
    <div>
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
        </div>
      ))}
    </div>
  );
};
```

#### Subscribe to changes in store

```ts
import { todosStore } from "../stores/todos.store";

todosStore.subscribeToStoreChange((newState, prevState) => {
  if (prevState.todos.length > newState.todos.length) {
    console.log(`You deleted a todo. New count: ${newState.todos.length}`);
  }

  if (prevState.todos.length !== newState.todos.length) {
    todosStore.updateProperty("counter", newState.todos.length);
  }
});
```

#### Update store state anywhere

```ts
todosStore.updateState({
  todos: [{ id: "1", text: "Hello, World!", done: false }],
  counter: 1,
});

todosStore.updateState(({ todos }) => ({
  todos: todos.concat({ id: "2", text: "Hello, World!", done: false }),
  counter: 2,
}));

todosStore.updateProperty("counter", 3);

todosStore.updateProperty("counter", ({ counter }) => counter + 1);
```
