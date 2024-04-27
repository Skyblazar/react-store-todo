import { Store } from "@skyblazar/react-store";

interface AppStoreState {
  user?: { email: string; password: string };
}

export const appStore = new Store<AppStoreState>(
  "appStore",
  {},
  {},
  { serializeOnUpdate: true }
);

try {
  appStore.unserialize();
} catch (error) {
  console.error(error);
}
