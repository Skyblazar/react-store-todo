import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/Login.page";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h3>Main App</h3>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
