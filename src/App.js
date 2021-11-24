import "./App.css";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Calculator from "./components/Calculator";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-btn">
            <Link to="/home">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/calculator">Calculator</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
