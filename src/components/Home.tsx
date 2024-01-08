//Libraries
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

//JSON


//Components
import { Tech, Cards, Intro } from "../utils";

//Types
import { darkModeProps } from "../types/index.d";


export function Home({ darkMode }: darkModeProps) {
    const { t } = useTranslation();
    const techRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const introRef = useRef<HTMLDivElement | null>(null);

    const scrollToTech = () => {
        techRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToIntro = () => {
        introRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div ref={introRef}>
                <Intro darkMode={darkMode} />
            </div>
            <div className="justify-center pt-0 lg:justify-end sm:pt-10 lg:pt-8">
                <button onClick={scrollToTech} aria-label={t('down')}>
                    <FontAwesomeIcon icon={faArrowCircleDown} className="animate-beat size-12 lg:size-16" style={{color: "fuchsia"}} />
                </button>
            </div>
            <div ref={techRef}>
                <Tech darkMode={darkMode} />
            </div>
            <div className="justify-center pt-4 lg:justify-end sm:pt-10 lg:pt-4">
                <button onClick={scrollToProjects} aria-label={t('down')}>
                    <FontAwesomeIcon icon={faArrowCircleDown} className="animate-beat size-12 lg:size-16" style={{color: "fuchsia"}} />
                </button>
            </div>
            <div ref={projectsRef}>
                <Cards darkMode={darkMode} />
            </div>
            <div className="justify-center pt-4 pb-44 sm:pt-10 lg:pb-32 lg:flex lg:justify-end lg:pt-12">
                <button onClick={scrollToIntro} aria-label={t('up')}>
                    <FontAwesomeIcon icon={faArrowCircleUp} className="animate-beat size-12 lg:size-16" style={{color: "fuchsia"}} />
                </button>
            </div>
        </>
    )
}