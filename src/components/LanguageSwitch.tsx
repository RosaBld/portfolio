import { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';

export function LanguageSwitch() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="flex">
            <button 
                className={`flex-1 text-center py-1 px-4 rounded-s-md font-bold transform transition-transform duration-500 hover:scale-125 ${language === 'en' ? 'bg-gradient-to-b from-violet to-fuchsia text-white' : 'bg-blue-200 text-blue-800'}`} 
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <button 
                className={`flex-1 text-center py-1 px-4 rounded-e-md font-bold transform transition-transform duration-500 hover:scale-125 ${language === 'fr' ? 'bg-gradient-to-b from-violet to-fuchsia text-white' : 'bg-blue-200 text-blue-800'}`} 
                onClick={() => setLanguage('fr')}
            >
                FR
            </button>
        </div>
    );
}