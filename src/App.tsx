import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './components/About';
import { Home } from './components/Home';
import { Tech } from './components/Tech';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element = { <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/tech" element= { <Tech /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
