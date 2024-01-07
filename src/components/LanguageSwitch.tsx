//Libraries
import { useContext } from 'react';


//Components
import { LanguageContext } from '../utils';

export function LanguageSwitch() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="flex">
            <button 
                className={`flex-1 items-center py-1 px-4 rounded-s-md font-bold transform transition-transform duration-500 hover:scale-125 hover:z-10 ${language === 'en' ? 'bg-gradient-to-b from-violet to-fuchsia text-white' : 'bg-blue-200 text-blue-800'}`} 
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <button 
                className={`flex-1 items-center py-1 px-4 rounded-e-md font-bold transform transition-transform duration-500 hover:scale-125 hover:z-10 ${language === 'fr' ? 'bg-gradient-to-b from-violet to-fuchsia text-white' : 'bg-blue-200 text-blue-800'}`} 
                onClick={() => setLanguage('fr')}
            >
                FR
            </button>
        </div>
    );
}