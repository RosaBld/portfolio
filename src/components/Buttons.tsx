import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../db/projects.json';
import { darkModeProps } from '../types/index.d';


export function Back({ darkMode }: darkModeProps) {

    const { t } = useTranslation();

    return (
        <div className="text-left font-custom pt-6">
            <Link to={'/projects' } className="flex flex-row justify-items-center items-center gap-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-600 hover:from-violet hover:to-fuchsia">
                <svg className={darkMode ? 'fill-current' : 'fill-current'} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path fill="gray" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
                {t('backpro')}
            </Link>
        </div>
    )
}

export function BackNext() {
    const { t } = useTranslation();
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const totalProjects = projects.length;

    const currentProjectIndex = projects.findIndex(project => project.slug === slug);

    const goToNextProject = () => {
        let nextIndex = currentProjectIndex + 1;
        if (nextIndex >= totalProjects) { 
            nextIndex = 0; 
        }
        const nextSlug = projects[nextIndex].slug;
        navigate(`/project/${nextSlug}`);
        window.scrollTo(0, 0)
    };

    const goToLastProject = () => {
        let lastIndex = currentProjectIndex - 1;
        if (lastIndex < 0) {
            lastIndex = totalProjects - 1; 
        }
        const lastSlug = projects[lastIndex].slug;
        navigate(`/project/${lastSlug}`);
        window.scrollTo(0, 0)
    };

    return (
        <div className="flex flex-row justify-center font-custom">
            <button onClick={goToLastProject} className="rounded-md  shadow-md text-gray-400 py-4 w-full border-solid border-2 border-gray-200 bg-slate-100 flex flex-row justify-items-center items-center gap-8 justify-center transform transition-transform hover:z-10 duration-500 hover:scale-105 bg-gradient-to-b hover:from-cyan hover:to-blue hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path fill="gray" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
                {t('back')}
            </button>
            
            <button onClick={goToNextProject} className="rounded-md  shadow-md text-gray-400 py-4 w-full border-solid border-2 border-gray-200 bg-slate-100 flex flex-row justify-items-center items-center gap-8 justify-center transform transition-transform hover:z-10 duration-500 hover:scale-105 bg-gradient-to-b hover:from-cyan hover:to-blue hover:text-white">
                {t('next')}
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path fill="gray" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </button>
        </div>
    );
}