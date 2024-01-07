//Libraries
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

//JSON



//Components
import { LanguageContext } from '../utils';

//Types
import { darkModeCards } from '../types/index.d';



export const EffectCards: React.FC<darkModeCards> = ({ darkMode, project, setSelectedCard, setZIndices, zIndices, style }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const { language } = useContext(LanguageContext);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);
    
    const [animating, setAnimating] = useState(false);
    
    const handleClick = (event: React.MouseEvent, slug: string) => {
        event.preventDefault();
        setAnimating(true);
        setSelectedCard(project.id);
        setZIndices(prevZIndices => {
            return { ...prevZIndices, [project.id]: prevZIndices[project.id] + 1 };
        });
    
        setTimeout(() => {
            if (isMounted) {
            navigate(`/project/${slug}`);
            window.scrollTo(0, 0);
            }
        }, 500);
    };    

    return (
        <div style={style}>
            <Tilt key={project.id} tiltMaxAngleX={30} tiltMaxAngleY={30} perspective={2000} scale={1} glareEnable={true}>
                <motion.div
                    className="w-72 justify-center"
                    style={{ position: 'relative', zIndex: zIndices[project.id] }}
                    animate={animating ? { scale: 1.5, translateX: "0%", translateY: "-20%" } : { scale: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div key={t(project.title[language])} className={`flex flex-col items-center ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} h-auto w-72 rounded-lg shadow-md`}>
                    <Link to={`/project/${project.slug}`} onClick={(event) => handleClick(event, project.slug)}>                                        <div className="w-full h-48 overflow-hidden rounded-t-lg">
                            <img src={project.image} className="w-full h-full object-cover" />
                            </div>                                        
                            <div className="p-4 text-left w-68">
                                <h3 className={`font-bold text-2xl h-12 ${darkMode ? 'text-gray-200' : 'text-gray-800'} `}>{t(project.title[language])}</h3>
                                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-800'} text-md pt-4 h-28`}>{t(project.preview[language])}</p>
                                <p className={`text-md pt-4 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Project Deadline: <span className={`${darkMode ? 'text-gray-200' : 'text-gray-600'} `}> {project.deadline} </span></p>
                                <p className={`text-md pt-4 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Tech stack:<span className= {`${darkMode ? 'text-gray-200' : 'text-gray-600'} `}> {project.tech} </span></p>
                            </div>
                        </Link>
                        <div className="flex flex-row w-60 p-4 justify-between text-xs">
                            <div className="flex flex-row items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512">
                                    <path fill="#000000" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                                <a href={project.git} target="_blank" className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">View Code</a>
                            </div>
                            <div className="flex flex-row  items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512">
                                    <path fill="#000000" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
                                </svg>
                                {project.deploy ? 
                                    <a href={project.deploy} target="_blank" className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">More</a> : 
                                    <p className="bg-clip-text text-transparent bg-gradient-to-b from-violet to-fuchsia">Not deployed</p>
                                }
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Tilt>
        </div>
    )
}