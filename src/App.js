
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import About from "./Components/About.jsx";
import './index.css';
import Food from "./Components/Food.jsx";
import Footer from "./Components/Footer.jsx";
import Connect from "./Components/Connect.jsx";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Food/>
      <Connect/>
      <Footer/>
    </div>
  );
}
export default App;