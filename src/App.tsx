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
import Card from './components/Card';
import { DarkLight } from './components/DarkLight';

function App() {
  const [language, setLanguage] = useState('en');
  const { i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={`flex justify-between items-center lg:border-b-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <Header />
        <DarkLight darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/tech" element={<Tech darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/card/:id" element={<Card darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </LanguageContext.Provider>
  );
}

export default App;
