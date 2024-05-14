import { Store } from "@skyblazar/react-store";

interface TodosStoreState {
  todos: { id: string; text: string; done?: boolean }[];
  counter: number;
}

export const todosStore = new Store<TodosStoreState>(
  "todosStore",
  { todos: [], counter: 0 },
  {},
  { serializeOnUpdate: true, unserializeOnCreate: true, debugStore: true }
);

todosStore.subscribeToStoreChange((newState, prevState) => {
  if (prevState.todos.length > newState.todos.length) {
    console.log(`You deleted a todo. New count: ${newState.todos.length}`);
  }

  if (prevState.todos.length !== newState.todos.length) {
    todosStore.updateProperty("counter", newState.todos.length);
  }
});
