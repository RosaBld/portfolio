import { Tech } from "./Tech";
import Projects from "./Projects";
import { Intro } from "./Intro";

export function Home() {
    return (
        <>
            <Intro />
            <Tech />
            <Projects />
        </>
    )
}