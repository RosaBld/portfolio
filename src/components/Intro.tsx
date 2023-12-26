import { Link } from "react-router-dom"

export function Intro() {
    return (
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center pt-16 pb-8">
            <div className="max-w-xl">
                <h1 className="text-4xl uppercase font-bold text-left font-custom">
                    Hi, my name is 
                        <Link to="/about" style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Rosalie Boulard </Link> 
                    and I'm a junior frontend web developper!
                </h1>
            </div>
            <div className="relative rounded-full overflow-hidden p-3">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-violet to-fuchsia z-0"></div>
                <img src="/pp.jpg" alt="profil picture" className="relative rounded-full size-44 z-10"/>
            </div>
        </div>
    )
}