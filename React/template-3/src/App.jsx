import "./App.css";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Getintouch from "../components/getintouch";
import About from "../components/about";
import Strategy from "../components/strategy";
import Process from "../components/process";
import İnsight from "../components/insight";
import Testimonials from "../components/Testimonials";
import Faq from "../components/faq";
import Footer from "../components/footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 overflowX-hidden py-3">
        <Banner />
        <Getintouch />
        <About />
        <Strategy />
        <Process />
        <İnsight />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
