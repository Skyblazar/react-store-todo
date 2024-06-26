import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/Login.page";
import { ProtectedRoute } from "./ProtectedRoute";
import { TodoPage } from "./pages/Todo.page";
import { FreeRoute } from "./FreeRoute";
import { TopNav } from "./TopNav";

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<TodoPage />} />
        </Route>

        <Route
          path="/login"
          element={
            <FreeRoute>
              <LoginPage />
            </FreeRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
