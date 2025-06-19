import { useState } from "react";
import { CartProvider } from "../cart_componenets/CartContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../componenets/nav";
import Bannercarousel from "../componenets/carousel";
import Products from "../componenets/products";
import Ads from "../componenets/ads";
import FruitsVegetables from "../componenets/fruitshop";
import Blogs from "../componenets/blogs";
import ImageCarousel from "../componenets/footercarousel";
import Footer from "../componenets/footer";
import Checkout from "../cart_componenets/checkout";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <div className="container-fluid">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Bannercarousel />
          <Products />
          <Ads />
          <FruitsVegetables />
          <Blogs />
          <ImageCarousel />
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
