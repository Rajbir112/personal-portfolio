
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/personal-portfolio" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
