import React from "react";
import { Cartcontextprovider } from "./context/cartcontext.jsx";
import Home from "./pages/home.jsx";
import Checkout from "./pages/checkout.jsx";
import ShopCategory from "./pages/shop-category.jsx";
import ProductCheckout from "./pages/product-checkout.jsx";
import ProductDetails from "./pages/product-detail.jsx";
import Blog from "./pages/blog.jsx";
import Blogdetails from "./pages/single-blog.jsx";
import ProductTracking from "./pages/product-tracking.jsx";
import WebElementsPage from "./pages/elements.jsx";
import Contact from "./pages/contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <Cartcontextprovider>
      <Router>
        <Navbar />
        <div className="container-fluid p-0 m-0 mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/category" element={<ShopCategory />} />
            <Route path="/shoping-cart" element={<Checkout />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/product-checkout" element={<ProductCheckout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<Blogdetails />} />
            <Route path="/product-tracking" element={<ProductTracking />} />
            <Route path="/Elementspage" element={<WebElementsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Cartcontextprovider>
  );
}

export default App;
