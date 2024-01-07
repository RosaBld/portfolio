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
import { useTransition, animated } from 'react-spring';
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
  const transitions = useTransition(location, {
    from: { opacity: location.pathname !== '/' ? 0 : 1, transform: location.pathname !== '/' ? 'translate3d(-100%,0,0)' : 'translate3d(0%,0,0)', position: 'absolute', width: '100%' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    config: { duration: 500 },
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      
      <div className={`${isSidebarOpen ? 'fixed' : 'fixed'} top-0 left-0 right-0 h-28 z-50 flex justify-between items-center px-0 lg:px-10`}>
        <div className={`flex justify-between w-full lg:border-b-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} darkMode={darkMode} />
          <DarkLight darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      
      <div style={{ position: 'relative' }}>
        {transitions((style, location) => (
          <animated.div style={{ ...style, position: 'absolute' }}>
            <Routes location={location}>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/tech" element={<Tech darkMode={darkMode} />} />
              <Route path="/projects" element={<Cards darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
              <Route path="/project/:slug" element={<Project darkMode={darkMode} />} />
            </Routes>
          </animated.div>
        ))}
        <Footer darkMode={darkMode} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
