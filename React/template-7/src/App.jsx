import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Countdown from "../components/countdown";
import Converter from "../components/currency";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Countdown" element={<Countdown />} />
          <Route path="/currency" element={<Converter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
