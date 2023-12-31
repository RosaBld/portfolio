//Libraries
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";

//JSON


//Components
import { LanguageSwitch } from "../utils";

//Types
import { HeaderProps } from "../types/index.d";


export const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen, darkMode }) => {
    const { t } = useTranslation();
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    };

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const isLargeScreen = useMediaQuery({ minWidth: 1024 });
    const [isSidebarOpenOnLargeScreen, setIsSidebarOpenOnLargeScreen] = useState(false);
    
    useEffect(() => {
    if (isLargeScreen) {
        setIsSidebarOpenOnLargeScreen(true);
    } else {
        setIsSidebarOpenOnLargeScreen(isSidebarOpen);
    }
    }, [isLargeScreen, isSidebarOpen]);

    const sidebarVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: isLargeScreen ? 1 : 0, x: isLargeScreen ? 0 : "-100%" },
    }

    return (
        <div className="flex justify-between w-full flex-row h-24 p-5 font-custom lg:gap-20 xl:gap-36 lg:h-12 lg:pt-12 lg:items-center">
            <motion.button 
                onClick={openSidebar} 
                className={`rounded-md px-4 py-4 font-custom bg-gradient-to-b from-violet to-fuchsia text-white transform transition-transform duration-500 hover:scale-200 lg:hidden ${isSidebarOpen ? 'hidden' : 'fixed'}`}
                initial={{ scale: 1 }} 
                whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.5 },
                    }} 
                whileTap={{ scale: 0.9 }} 
            >
                {isOpen ? '' : 'Menu'}
            </motion.button>

                <motion.div 
                    className={`sidebar ${isSidebarOpenOnLargeScreen ? 'open' : 'closed'}`}
                    variants={sidebarVariants}
                    initial="closed"
                    animate={isSidebarOpen ? "open" : "closed"}
                    aria-label={t('sidebar')}
                >
                    
                    <motion.button 
                        onClick={closeSidebar}
                        className="absolute top-0 right-0 m-2 lg:hidden"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={t('closeSidebar')}
                    >
                        <FontAwesomeIcon icon={faXmark} style={{color: "white"}} />
                    </motion.button>

                        <ul className={`flex flex-col gap-12 items-center rounded-md lg:px-6 px-6 lg:py-8 py-6 lg:flex-row lg:gap-12 ${darkMode ? ' lg:bg-slate-900 lg:from-slate-900 lg:to-slate-900' : 'lg:bg-slate-100 lg:from-slate-100 lg:to-slate-100'} bg-gradient-to-b from-violet to-fuchsia`}>                            
                            <li className="text-base transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                                <Link to="/" aria-label={`${t('link')} ${t('home')}`} onClick={() => { handleClick(); toggleSidebar(); }} className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white hover:from-blue hover:to-blue lg:bg-gradient-to-b lg:from-cyan lg:to-blue lg:hover:from-violet lg:hover:to-fuchsia">{t('home')}</Link>
                            </li>
                            <li className="text-base transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                                <Link to="/about" aria-label={`${t('link')} ${t('about')}`} onClick={() => { handleClick(); toggleSidebar(); }} className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white hover:from-blue hover:to-cyan lg:from-cyan lg:to-blue lg:hover:from-violet lg:hover:to-fuchsia">{t('about')}</Link>
                            </li>
                            <li className="text-base transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-24">
                                <Link to="/tech" aria-label={`${t('link')} ${t('techstack')}`} onClick={() => { handleClick(); toggleSidebar(); }} className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white hover:from-cyan hover:to-blue lg:from-cyan lg:to-blue lg:hover:from-violet lg:hover:to-fuchsia">{t('techstack')}</Link>
                            </li>
                            <li className="text-base transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                                <Link to="/projects" aria-label={`${t('link')} ${t('projects')}`} onClick={() => { handleClick(); toggleSidebar(); }} className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white hover:from-cyan hover:to-blue lg:from-cyan lg:to-blue lg:hover:from-violet lg:hover:to-fuchsia">{t('projects')}</Link>
                            </li>
                            <li className="text-base transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                                <Link to="/contact" aria-label={`${t('link')} ${t('Contact')}`} onClick={() => { handleClick(); toggleSidebar(); }} className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white hover:from-cyan hover:to-blue lg:from-cyan lg:to-blue lg:hover:from-violet lg:hover:to-fuchsia">{t('Contact')}</Link>
                            </li>
                            <li>
                                <a onClick={() => { handleClick(); toggleSidebar(); }} href="https://github.com/RosaBld" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="18" viewBox="0 0 496 512" className="transform transition-transform duration-500 hover:scale-150"
                                        onMouseEnter={() => setIsHovered1(true)}
                                        onMouseLeave={() => setIsHovered1(false)}
                                    >
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={isLargeScreen ? 'cyan' : 'pink'} stopOpacity="1" />
                                                <stop offset="100%" stopColor={isLargeScreen ? 'blue' : 'pink'} stopOpacity="1" />
                                            </linearGradient>
                                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={isLargeScreen ? 'pink' : 'cyan'} stopOpacity="1" />
                                                <stop offset="100%" stopColor={isLargeScreen ? 'fuchsia' : 'blue'} stopOpacity="1" />
                                            </linearGradient>
                                            </defs>
                                        <path fill={`url(#${isHovered1 ? 'grad2' : 'grad1'})`} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { handleClick(); toggleSidebar(); }} href="https://www.linkedin.com/in/rosalie-boulard/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="18" viewBox="0 0 448 512" className="transform transition-transform duration-500 hover:scale-150"
                                        onMouseEnter={() => setIsHovered2(true)}
                                        onMouseLeave={() => setIsHovered2(false)}
                                    >
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={isLargeScreen ? 'cyan' : 'pink'} stopOpacity="1" />
                                                <stop offset="100%" stopColor={isLargeScreen ? 'blue' : 'pink'} stopOpacity="1" />
                                            </linearGradient>
                                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={isLargeScreen ? 'pink' : 'cyan'} stopOpacity="1" />
                                                <stop offset="100%" stopColor={isLargeScreen ? 'fuchsia' : 'blue'} stopOpacity="1" />
                                            </linearGradient>
                                        </defs>
                                        <path fill={`url(#${isHovered2 ? 'grad2' : 'grad1'})`} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
            <LanguageSwitch />
        </div>
    )
}