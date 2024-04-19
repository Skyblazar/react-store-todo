import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/Login.page";
import { ProtectedRoute } from "./ProtectedRoute";
import { TodoPage } from "./pages/Todo.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
