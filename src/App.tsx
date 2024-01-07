import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './components/About';
import { Home } from './components/Home';
import { Tech } from './components/Tech';
import Cards from './components/Cards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageContext } from './components/LanguageContext';
import Project from './components/Project';
import { DarkLight } from './components/DarkLight';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const storedLanguage = localStorage.getItem('language');
  const storedMode = localStorage.getItem('darkMode');

  const [language, setLanguage] = useState<'en' | 'fr'>(storedLanguage ? storedLanguage as 'en' | 'fr' : 'en');
  const [darkMode, setDarkMode] = useState(storedMode === 'true');

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language, i18n]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    window.addEventListener('scroll', closeSidebar);

    return () => {
        window.removeEventListener('scroll', closeSidebar);
    };
}, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    
    <div className={`${isSidebarOpen ? 'fixed' : 'fixed'} top-0 left-0 right-0 h-28 z-50 flex justify-between items-center px-0 lg:px-10`}>
      <div className={`flex justify-between w-full lg:border-b-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} darkMode={darkMode} />
        <DarkLight darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
    
    <div style={{ position: 'relative' }}>
      <AnimatePresence mode='wait'>
        {/* <motion.div
          key={location.pathname}
          initial={{ opacity: location.pathname !== '/' && location.pathname !==  ? 0 : 1, x: location.pathname !== '/' ? '-100%' : '0%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '100%' }}
          style={{ position: 'absolute', width: '100%' }}
          transition={{ duration: 0.5 }}
        > */}
        <Routes location={location} key={location.key}>
          <Route path="/" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Home darkMode={darkMode} />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: '0%' }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.5 }}>
              <About darkMode={darkMode} />
            </motion.div>
          } />
          <Route path="/tech" element={
            <motion.div initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: '0%' }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.5 }}>
              <Tech darkMode={darkMode} />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: '0%' }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.5 }}>
              <Cards darkMode={darkMode} />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: '0%' }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.5 }}>
              <Contact darkMode={darkMode} />
            </motion.div>
          } />
          <Route path="/project/:slug" element={
            <motion.div initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: '0%' }} exit={{ opacity: 0, x: '100%' }} transition={{ duration: 0.5 }}>
              <Project darkMode={darkMode} />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      <Footer darkMode={darkMode} />
    </div>
  </LanguageContext.Provider>
  );
}

export default App;
