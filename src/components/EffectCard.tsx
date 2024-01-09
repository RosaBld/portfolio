//Libraries
import { motion } from 'framer-motion';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <Link to={`/project/${project.slug}`} onClick={(event) => handleClick(event, project.slug)} aria-label={t('seePro')}>                                        
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                            <img src={project.image} alt={t(project.title[language])} className="w-full h-full object-cover" />
                            </div>                                        
                            <div className="p-4 text-left w-68">
                                <h4 className={`font-bold text-2xl h-12 ${darkMode ? 'text-gray-200' : 'text-gray-800'} `}>{t(project.title[language])}</h4>
                                <h5 className={`${darkMode ? 'text-gray-400' : 'text-gray-800'} text-md pt-4 h-28`}>{t(project.preview[language])}</h5>
                                <h5 className={`text-md pt-4 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Project Deadline: <span className={`${darkMode ? 'text-gray-200' : 'text-gray-600'} `}> {project.deadline} </span></h5>
                                <h5 className={`text-md pt-4 h-12 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>Tech stack:<span className= {`${darkMode ? 'text-gray-200' : 'text-gray-600'} `}> {project.tech} </span></h5>
                            </div>
                        </Link>
                        <div className="flex flex-row w-60 p-4 justify-between text-xs">
                            <div className="flex flex-row items-center gap-2">
                                <FontAwesomeIcon icon={faGithub} className="size-5" />
                                <a href={project.git} target="_blank" aria-label={t('view')} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('view')}</a>
                            </div>
                            <div className="flex flex-row  items-center gap-2">
                                <FontAwesomeIcon icon={faLink} className="size-5" />
                                {project.deploy ? 
                                    <a href={project.deploy} target="_blank" aria-label={`${t('project')} ${t('deployed')}`} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{`${t('project')} ${t('deployed')}`}</a> : 
                                    <h5 className="bg-clip-text text-transparent bg-gradient-to-b from-violet to-fuchsia">{t('undeployed')}</h5>
                                }
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Tilt>
        </div>
    )
}