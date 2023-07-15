import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";//bootstap css file so we get styling
import MyNavbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
