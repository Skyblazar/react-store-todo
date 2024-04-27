import { useStoreProperty } from "@skyblazar/react-store";
import { Navigate } from "react-router-dom";
import { appStore } from "./stores/app.store";

interface FreeRouteProps {
  children: React.ReactNode;
}

export const FreeRoute: React.FC<FreeRouteProps> = ({ children }) => {
  const [user] = useStoreProperty(appStore, (state) => state.user, "user");

  if (!(!user?.email || !user?.password)) {
    return <Navigate to="/" />;
  }

  return children;
};
