// Libraries
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link, useParams, useNavigate } from 'react-router-dom';

//JSON
import projects from '../db/projects.json';

//Components


//Types
import { darkModeProps } from '../types/index.d';


export function Back() {

    const { t } = useTranslation();

    return (
        <div className="text-left font-custom pt-6">
            <Link to={'/projects' } aria-label={`${t('backpro')}`} className="flex flex-row justify-items-center items-center gap-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-600 hover:from-violet hover:to-fuchsia">
                <FontAwesomeIcon icon={faArrowLeft} style={{color: "#9ca3af"}} />
                {t('backpro')}
            </Link>
        </div>
    )
}

export function BackNext({ darkMode }: darkModeProps) {
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
        <div className="flex flex-row justify-center gap-16 pb-32 font-custom">
            <button onClick={goToLastProject} aria-label={`${t('back')} ${t('project')}`} className="w-1/2 relative group cursor-pointer">
                <div
                    className={`absolute -inset-1 bg-gradient-to-r ${darkMode ? 'from-blue to-cyan ' : 'from-fuchsia to-violet'} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}>
                </div>
                <div
                    className={`relative justify-center px-7 py-6 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'} ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}>
                    <div className={`space-y-2 ${darkMode ? 'text-white' : 'text-slate-700'} flex flex-row gap-4`}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        {t('back')}
                    </div>
                </div>
            </button>
    
            <button onClick={goToNextProject} aria-label={`${t('next')} ${t('project')}`} className="w-1/2 relative group cursor-pointer">
                <div
                    className={`absolute -inset-1 bg-gradient-to-r ${darkMode ? 'from-cyan to-blue' : 'from-violet to-fuchsia '} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}>
                </div>
                <div
                    className={`relative justify-center px-7 py-6 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'} ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}>
                    <div className={`space-y-2 ${darkMode ? 'text-white' : 'text-slate-700'} flex flex-row gap-4`}>
                        {t('next')}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </button>
        </div>
    );
}