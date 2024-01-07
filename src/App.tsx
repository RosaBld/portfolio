//Libraries
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';

//Components
import './App.css';
import { Header, About, Home, Tech, Cards, Contact, Footer, LanguageContext, Project, DarkLight } from './utils';


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
    
    <div className={`${isSidebarOpen ? 'fixed' : 'fixed'} top-0 left-0 right-0 pt-8 h-12 z-50 flex justify-between items-center px-0 lg:px-10`}>
      <div className={`flex justify-between w-full lg:pb-4 lg:pt-4 lg:border-b-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} darkMode={darkMode} />
        <DarkLight darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
    
    <div style={{ position: 'relative' }}>
      <AnimatePresence mode='wait'>
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
