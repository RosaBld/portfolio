// Libraries
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

// JSON
import data from '../db/projects.json';

// Components
import { EffectCards } from '../utils';

// Types
import { darkModeProps, Project } from '../types/index.d';


export const Cards: React.FC<darkModeProps> = ({ darkMode }) => {

    const { t } = useTranslation();

    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const [animating, setAnimating] = useState(false);

    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const initialZIndices = data.reduce<{ [key: number]: number }>((acc, project) => ({ ...acc, [project.id]: 0 }), {});
    const [zIndices, setZIndices] = useState<{ [key: number]: number }>(initialZIndices);

    return (
        <>
            <div className={`${isHomePage ? `pt-16` : 'pt-10'} ${isHomePage ? `pb-0` : 'pb-32'}`}>
                <div className="py-10" >
                    <h2 className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} font-bold py-2 my-2 ${isHomePage ? 'text-center text-4xl lg:text-5xl' : 'text-left text-4xl lg:text-6xl'}`}>{t('project_title')}</h2>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}  ${isHomePage ? 'text-center text-xl lg:text-2xl' : 'text-left tex-2xl lg:text-3xl'}`}>{t('project_text')}</p>
                </div>

                <div style={{ position: 'relative' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center font-custom">
                    {data.sort((a: Project, b: Project) => b.id - a.id).map((project: Project) => (
                          <EffectCards 
                            key={project.id} 
                            project={project} 
                            darkMode={darkMode} 
                            animating={animating} 
                            setAnimating={setAnimating} 
                            selectedCard={selectedCard} 
                            setSelectedCard={setSelectedCard} 
                            setZIndices={setZIndices} 
                            zIndices={zIndices} 
                            style={{ position: 'relative', zIndex: zIndices[project.id] }}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}