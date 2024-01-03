import { useEffect } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkLightProps } from '../types/index.d';

export function DarkLight({ darkMode, setDarkMode }: DarkLightProps) {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <div className="h-20 p-5 pb-10 gap-8">
            <button onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={`size-6 ${darkMode ? 'text-fuchsia-500' : 'text-blue-600'}`} />
            </button>
        </div>
    )
}