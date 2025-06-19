import Nav from "./components/nav";
import Banner1 from "./components/banner";

import Featureheader from "./components/feature";
import Featurecontent from "./components/features";

import What from "./components/what";
import Design from "./components/design";
import Achivments from "./components/achivments";

import About from "./components/about";
import Digital from "./components/digital";
import Profolio from "./components/profolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Nav />
      <div className="container-fluid py-5 banner">
        <div className="row justify-content-around">
          <Banner1 />
        </div>
      </div>
      <Featureheader />
      <Featurecontent />
      <What />
      <Design />
      <Achivments />
      <About />
      <Digital />
      <Profolio/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
