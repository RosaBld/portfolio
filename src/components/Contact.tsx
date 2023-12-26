export function Contact() {
    return (
        <div className="p-20">
            <h2 className="text-6xl font-bold p-2 m-2">
                You can contact me via
                <a href="https://www.linkedin.com/in/rosalie-boulard/"> 
                <span style={{ background: 'linear-gradient(to bottom, cyan, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}> Linkedin </span>
                </a>
                or via mail at 
                    <span style={{ background: 'linear-gradient(to bottom, pink, fuchsia)', WebkitBackgroundClip: 'text', color: 'transparent' }}> rosalie.boulard@gmail.com </span>
                !
            </h2>
        </div>
    )
}