import { Tech } from "./Tech";
import Projects from "./Projects";
import { Intro } from "./Intro";
import { darkModeProps } from "../types/index.d";

export function Home({ darkMode }: darkModeProps) {

    return (
        <>
            <Intro darkMode={darkMode} />
            <Tech darkMode={darkMode} />
            <Projects darkMode={darkMode} />
        </>
    )
}