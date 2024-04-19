import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!localStorage.getItem("email") || !localStorage.getItem("password")) {
    return <Navigate to="/login" />;
  }

  return children;
};
