import { useStoreProperty } from "@skyblazar/react-store";
import { Navigate, Outlet } from "react-router-dom";
import { appStore } from "./stores/app.store";

export const ProtectedRoute: React.FC = () => {
  const [user] = useStoreProperty(appStore, (state) => state.user, "user");

  if (!user?.email || !user.password) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
