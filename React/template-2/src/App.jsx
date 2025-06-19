import './App.css'
import Navbar from '../componenets/header'
import Banner from '../componenets/banner'
import Agency from '../componenets/agency'
import Services from '../componenets/service'
import Create from '../componenets/creative'
import Plans from '../componenets/plans'
import Headline from '../componenets/headline'
import Strategy from '../componenets/strategy'
import Team from '../componenets/team'
import Hiring from '../componenets/hiring'
import Contact from '../componenets/contact'
import Footer from '../componenets/footer'
function App() {

  return (
    <>

      <Navbar />
      <div className="container-fluid px-0 mx-0 overflow-hidden">
      <Banner />
      <Services />
      <Agency />
      <Create />
      <Plans />
      <Headline />
      <Strategy />
      <Team />
      <Hiring />
      <Contact />
      <Footer />
      </div> 
    </>
  )
}

export default App
