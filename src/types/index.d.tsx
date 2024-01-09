import { Dispatch, SetStateAction } from 'react';

interface Translation {
    [key: string]: string;
    en: string;
    fr: string;
}

export type Project = {
    id: number;
    slug: string;
    image: string;
    title: Translation;
    preview: Translation;
    deadline: string;
    tech: string[];
    git: string;
    deploy: string; 
    overview: Translation;
    screens: string[];
};


export type WorkData = {
    title: Translation,
    time: Translation,
    place: string,
    location: string,
    date: Translation,
}

export type EducationData = {
    title: Translation,
    time: Translation,
    graduate: Translation,
    place: string,
    date: Translation,
}

export type darkModeProps = {
    darkMode: boolean;
};

export type DarkLightProps = {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export interface HeaderProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    darkMode: boolean;
}

export type darkModeCards = {
    darkMode: boolean;
    project: Project;
    animating: boolean;
    selectedCard: number | null;
    setSelectedCard: React.Dispatch<React.SetStateAction<number | null>>;
    setAnimating: Dispatch<SetStateAction<boolean>>;
    setZIndices: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
    zIndices: { [key: number]: number };
    style: React.CSSProperties;
}