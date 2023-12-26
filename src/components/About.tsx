export function About() {
    return (
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center pt-16 pb-8">
            <div className="max-w-xl">
                <h1 className="text-4xl uppercase font-bold text-lef font-customt">
                    Hi, my name is 
                        <span style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Rosalie Boulard </span> 
                    and I'm a junior frontend web developper!
                </h1>
            </div>
            <div className="relative rounded-full overflow-hidden p-3">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-violet-500 via-pink-500 to-fuchsia-500 z-0"></div>
                <img src="/pp.jpg" alt="profil picture" className="relative rounded-full size-44 z-10"/>
            </div>
        </div>
    )
}