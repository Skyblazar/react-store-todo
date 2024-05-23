import { Store } from "@skyblazar/react-store";

interface TodosStoreState {
  todos: { id: string; text: string; done?: boolean }[];
  counter: number;
}

export const todosStore = new Store<TodosStoreState>(
  "todosStore",
  { todos: [], counter: 0 },
  {
    DELETE_TODO: ({ state, updateProperty }, payload: { id: string }) =>
      updateProperty(
        "todos",
        state.todos.filter(({ id }) => id !== payload.id)
      ),
    UPDATE_COUNT: ({ state, updateProperty }) =>
      updateProperty("counter", state.todos.length),
  },
  { serializeOnUpdate: true, unserializeOnCreate: true, debugStore: true }
);

const unsubscribe = todosStore.subscribeToStoreChange((newState, prevState) => {
  if (prevState.todos.length > newState.todos.length) {
    console.log(
      `You deleted ${
        prevState.todos.length - newState.todos.length
      } todo(s). New count: ${newState.todos.length}`
    );
  }

  if (prevState.todos.length !== newState.todos.length) {
    todosStore.dispatch("UPDATE_COUNT");
  }
});

import.meta.hot?.on("vite:beforeUpdate", () => {
  unsubscribe();
});
