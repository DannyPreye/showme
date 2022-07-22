import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Home from "./container/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
