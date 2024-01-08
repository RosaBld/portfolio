// Libraries
import { useTranslation } from 'react-i18next';

//JSON

//Components

//Types
import { darkModeProps } from '../types/index.d';

export function Contact({ darkMode }: darkModeProps) {
    const { t } = useTranslation();

    return (
        <div className="pt-20 p-10 lg:p-20 h-auto overflow-wrap break-word">
            <h2 className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} text-2xl  lg:text-6xl font-bold lg:p-2 lg:m-2 h-full`}>
                {t('contact1')}
                <a href="https://www.linkedin.com/in/rosalie-boulard/" aria-label={`LinkedIn ${t('link')}`} target="_blank"> 
                    <span style={{ background: 'linear-gradient(to bottom, cyan, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Linkedin </span>
                </a>
                {t('contact2')} 
                <a href="mailto:rosalie.boulard@gmail.com" aria-label="mail to" style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                    <span style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> rosalie.boulard@gmail.com </span>
                </a>
            </h2>
        </div>
    )
}