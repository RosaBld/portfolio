import { useTranslation } from 'react-i18next';

export function Contact() {
    const { t } = useTranslation();

    return (
        <div className="p-20 h-auto overflow-wrap break-word">
            <h2 className="text-6xl font-bold p-2 m-2 h-full">
                {t('contact1')}
                <a href="https://www.linkedin.com/in/rosalie-boulard/" target="_blank"> 
                <span style={{ background: 'linear-gradient(to bottom, cyan, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Linkedin </span>
                </a>
                {t('contact2')} 
                <div style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                    <span style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> rosalie.boulard@gmail.com </span>
                </div>
                {t('contact3')}
            </h2>
        </div>
    )
}