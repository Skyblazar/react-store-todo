import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/Login.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h3>Main App</h3>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
