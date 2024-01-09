// Libraries
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

// JSON
import data from '../db/projects.json';

// Components
import { Back, BackNext } from './Buttons';
import { LanguageContext } from '../utils';
import { LanguageContextType } from './LanguageContext';

// Types
import type { darkModeProps } from '../types/index.d';


export const Project: React.FC<darkModeProps> = ({ darkMode })=> {
    const { t } = useTranslation();

    const { slug } = useParams();
    const project = data.find(project => project.slug === slug);

    const { language } = useContext<LanguageContextType>(LanguageContext);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="pt-10">
            <Back />
            <div className="py-12 font-custom">
                <div className="text-left">
                    <h2 className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-4xl lg:text-6xl font-bold py-4`}>{project.title[language]}</h2>
                    <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-2xl lg:text-3xl py-2 text-justify`}>{project.overview[language]}</h3>
                </div>

                <div className="flex flex-row justify-between py-4">
                    <h4 className="text-xs lg:text-sm text-gray-500">Tech stack: {project.tech}</h4>
                    <h4 className="text-xs lg:text-sm text-gray-500">Project Deadline: {project.deadline}</h4>
                </div>

                <div className="flex flex-row justify-between py-4 pb-12">
                    <div className="flex flex-row items-center gap-4">
                        <FontAwesomeIcon icon={faGithub} className="size-5" />
                        <a href={project.git} target="_blank" aria-label={t('view')} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('view')}</a>
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <FontAwesomeIcon icon={faLink} className="size-5" />
                        {project.deploy ? 
                            <a href={project.deploy} target="_blank" aria-label={`${t('project')} ${t('deployed')}`} className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{`${t('project')} ${t('deployed')}`}</a> : 
                            <h5 className="bg-clip-text text-transparent bg-gradient-to-b from-cyan to-blue hover:from-violet hover:to-fuchsia">{t('undeployed')}</h5>
                        }
                    </div>
                </div>
                
                <div className="p-8 lg:p-20 bg-slate-200 rounded-2xl shadow-md">
                    <div className="flex flex-col gap-8 md:gap-16">
                        {project.screens.map((screen, index) => (
                            <img key={index} src={screen} alt={project.title[language]} />
                        ))}
                    </div>
                </div>
                
            </div>
            <BackNext darkMode={darkMode} />
        </div>
    );
};