import { Dispatch, SetStateAction } from 'react';

interface Translation {
    [key: string]: string;
    en: string;
    fr: string;
}

export type Project = {
    id: number;
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