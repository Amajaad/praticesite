import "./App.css";
import { CartProvider } from "../components/cartcontext.jsx";
import Header from "../components/header";
import Logo from "../components/logo";
import Nav from "../components/nav.jsx";
import Navpc from "../components/nav2.jsx";
import Banner from "../components/banner.jsx";
import Delivery from "../components/delivery.jsx";
import Deals from "../components/deals.jsx";
import Popular from "../components/popular.jsx";
import Macbook from "../components/mac-carousel.jsx";
import Hotnew from "../components/hot_new.jsx";
import Trend from "../components/trend.jsx";
import Bestsellers from "../components/best.jsx";
import Sellers from "../components/sellers.jsx";
import Trends from "../components/trends.jsx";
import Reviews from "../components/Reviews.jsx";
import Viewed from "../components/view.jsx";
import Brands from "../components/brandscarousel.jsx";
import Footer from "../components/footer.jsx";
function App() {
  return (
    <CartProvider>
      <div className="container-fluid px-0 m-0 overflow-x-hidden">
        <Header />
        <Logo />
        <Nav />
        <Navpc />
        <Banner />
        <Delivery />
        <Deals />
        <Popular />
        <Macbook />
        <Hotnew />
        <Trend />
        <Bestsellers />
        <Sellers />
        <Trends />
        <Reviews />
        <Viewed />
        <Brands />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
