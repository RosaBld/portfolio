import { Link } from "react-router-dom";
import { useState } from 'react';
import { LanguageSwitch } from "./LanguageSwitch";
import { useTranslation } from 'react-i18next';

export function Header() {
    const { t } = useTranslation();

    const handleClick = () => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    };

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
      };

    return (
        <div className="flex justify-between w-full flex-row h-28 p-5 pb-10 font-custom lg:gap-20 xl:gap-36 lg:pt-12 lg:items-center">
            <button onClick={toggleSidebar} className="rounded-md px-4 py-2 bg-gradient-to-b from-violet to-fuchsia text-white transform transition-transform duration-500 hover:scale-125 lg:hidden">
                {isOpen ? 'Menu' : 'Menu'}
            </button>
            <div className={`fixed top-16 left-2 w-auto h-fit bg-transparent lg:static lg:bg-transparent ${isOpen ? 'block opacity-100' : 'opacity-0'} lg:opacity-100 lg:flex transition-all duration-500 lg:animate-none ${isOpen ? 'animate-slide-in' : 'animate-slide-out'}`}>
                <ul className={`flex flex-col gap-12 items-center lg:flex-row lg:gap-8`}>
                    <li className="text-sm transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                        <Link to="/" onClick={handleClick} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('home')}</Link>
                    </li>
                    <li className="text-sm transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                        <Link to="/about" onClick={handleClick} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('about')}</Link>
                    </li>
                    <li className="text-sm transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-24">
                        <Link to="/tech" onClick={handleClick} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('techstack')}</Link>
                    </li>
                    <li className="text-sm transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                        <Link to="/projects" onClick={handleClick} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('projects')}</Link>
                    </li>
                    <li className="text-sm transform transition-transform duration-500 hover:scale-125 lg:text-base lg:transform lg:transition-transform lg:duration-500 lg:hover:scale-150 lg:w-20">
                        <Link to="/contact" onClick={handleClick} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('Contact')}</Link>
                    </li>
                    <li>
                        <a href="https://github.com/RosaBld" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="18" viewBox="0 0 496 512" className="transform transition-transform duration-500 hover:scale-150"
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                            >
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{stopColor: "cyan", stopOpacity: 1}} />
                                        <stop offset="100%" style={{stopColor: "blue", stopOpacity: 1}} />
                                    </linearGradient>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{stopColor: "pink", stopOpacity: 1}} />
                                        <stop offset="100%" style={{stopColor: "fuchsia", stopOpacity: 1}} />
                                    </linearGradient>
                                </defs>
                                <path fill={`url(#${isHovered1 ? 'grad2' : 'grad1'})`} d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rosalie-boulard/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="18" viewBox="0 0 448 512" className="transform transition-transform duration-500 hover:scale-150"
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                            >
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{stopColor: "cyan", stopOpacity: 1}} />
                                        <stop offset="100%" style={{stopColor: "blue", stopOpacity: 1}} />
                                    </linearGradient>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{stopColor: "pink", stopOpacity: 1}} />
                                        <stop offset="100%" style={{stopColor: "fuchsia", stopOpacity: 1}} />
                                    </linearGradient>
                                </defs>
                                <path fill={`url(#${isHovered2 ? 'grad2' : 'grad1'})`} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <LanguageSwitch />
        </div>
    )
}