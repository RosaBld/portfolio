import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { darkModeProps } from '../types/index.d';

export function Intro({ darkMode }: darkModeProps) {
    const { t } = useTranslation();

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className="flex flex-col gap-10 lg:flex-row justify-between items-center pt-32 pb-8">
                <div className="max-w-xl">
                    <h1 className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-5xl uppercase font-bold text-left font-custom lg:animate-slide-in`}>
                        {t('intro_greeting')} 
                            <Link to="/about" onClick={handleClick} style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Rosalie Boulard </Link> 
                        {t('intro_role')}
                    </h1>
                </div>
                <div className="relative rounded-full overflow-hidden p-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-violet to-fuchsia z-0"></div>
                    <img src="/pp.jpg" alt="profil picture" className="relative rounded-full size-56 z-10"/>
                </div>
            </div>
            <div className="justify-center pt-8 lg:flex lg:justify-end lg:pt-16">
                <FontAwesomeIcon icon={faArrowCircleDown} className="animate-beat size-20" style={{color: "fuchsia"}} />
            </div>
        </div>
    )
}