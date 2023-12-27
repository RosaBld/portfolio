import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './components/About';
import { Home } from './components/Home';
import { Tech } from './components/Tech';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageContext } from './components/LanguageContext';
import Card from './components/Card'

function App() {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
