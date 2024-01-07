import { Tech } from "./Tech";
import Cards from "./Cards";
import { Intro } from "./Intro";
import { darkModeProps } from "../types/index.d";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

export function Home({ darkMode }: darkModeProps) {
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
            <div className="justify-center pt-0 lg:justify-end lg:pt-8">
                <button onClick={scrollToTech}>
                    <FontAwesomeIcon icon={faArrowCircleDown} className="animate-beat size-12 lg:size-16" style={{color: "fuchsia"}} />
                </button>
            </div>
            <div ref={techRef}>
                <Tech darkMode={darkMode} />
            </div>
            <div className="justify-center pt-4 lg:justify-end lg:pt-4">
                <button onClick={scrollToProjects}>
                    <FontAwesomeIcon icon={faArrowCircleDown} className="animate-beat size-12 lg:size-16" style={{color: "fuchsia"}} />
                </button>
            </div>
            <div ref={projectsRef}>
                <Cards darkMode={darkMode} />
            </div>
            <div className="justify-center pt-4 pb-44 lg:pb-32 lg:flex lg:justify-end lg:pt-12">
                <button onClick={scrollToIntro}>
                    <FontAwesomeIcon icon={faArrowCircleUp} className="animate-beat size-12 lg:size-16" style={{color: "fuchsia"}} />
                </button>
            </div>
        </>
    )
}