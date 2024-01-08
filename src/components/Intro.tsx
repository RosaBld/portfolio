//Libraries
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

//JSON


//Components


//Types
import { darkModeProps } from '../types/index.d';


export function Intro({ darkMode }: darkModeProps) {
    const { t } = useTranslation();

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center pt-8 lg:pt-20 pb-8">
            <div className="max-w-xl">
                <h1 className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} text-3xl lg:text-5xl uppercase font-bold lg:leading-tight text-left font-custom lg:animate-slide-in`}>
                    {t('intro_greeting')} 
                        <Link to="/about" onClick={handleClick} aria-label={`${t('link')} ${t('about')}`} style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Rosalie Boulard </Link> 
                    {t('intro_role1')}
                    <Link to="/contact" onClick={handleClick} aria-label={`${t('link')} ${t('Contact')}`} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom hover:bg-gradient-to-r hover:from-indigo-500 hover:to-rose-400 via-fuchsia-500 lg:bg-[length:100%_6px] hover:bg-no-repeat hover:bg-bottom">
                        {t('intro_role2')}    
                    </Link>
                </h1>
            </div>
            <div className="relative rounded-full overflow-hidden p-3 lg:animate-slide-out">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-violet to-fuchsia z-0"></div>
                <img src="/pp.jpg" alt="profil picture" className="relative rounded-full size-36 sm:size-44 lg:size-64 xl:size-80 z-10"/>
            </div>
        </div>
    )
}