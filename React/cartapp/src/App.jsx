import React from "react";
import { Cartcontextprovider } from "./context/cartcontext.jsx";
import Home from "./pages/home.jsx";
import Checkout from "./pages/checkout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
function App() {
  return (
    <Cartcontextprovider>
      <Router>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </Cartcontextprovider>
  );
}

export default App;
