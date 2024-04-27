import { Store } from "@skyblazar/react-store";

interface TodosStoreState {
  todos: { id: string; text: string }[];
}

export const todosStore = new Store<TodosStoreState>(
  "todosStore",
  { todos: [] },
  {},
  { serializeOnUpdate: true }
);

try {
  todosStore.unserialize();
} catch (error) {
  console.log(error);
}
