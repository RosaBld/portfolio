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
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const { i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={`fixed top-0 left-0 right-0 h-28 z-50 flex justify-between items-center px-20`}>
        <div className={`flex justify-between w-full lg:border-b-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <Header />
          <DarkLight darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/tech" element={<Tech darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/card/:slug" element={<Card darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </LanguageContext.Provider>
  );
}

export default App;
