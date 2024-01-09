//Libraries
import { useTranslation } from 'react-i18next';

//JSON


//Components


//Types
import { darkModeProps } from '../types/index.d';


export function Footer({ darkMode }: darkModeProps) {
    const { t } = useTranslation();

    return (
        <div className={`fixed bottom-0 left-10 right-10 font-custom text-xs ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? ' bg-slate-900' : 'bg-slate-100'}`}>
            
            <div className={`pb-5 pt-6 border-t-4 text-right ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                
                    <h5>{t('build1')} <span style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Rosalie Boulard </span> {t('build2')} <span style={{ background: 'linear-gradient(to bottom, cyan, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Tailwind </span> {t('build3')} <span style={{ background: 'linear-gradient(to bottom, cyan, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Typescript </span></h5>
                
            </div>
        </div>
    )
}