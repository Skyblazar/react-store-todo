import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h3>Main App</h3>} />
        <Route path="/login" element={<h3>Login</h3>} />
      </Routes>
    </Router>
  );
}

export default App;
