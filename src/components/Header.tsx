import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    return (
        <header className="top-0 flex flex-col py-20 mb-10 lg:fixed lg:py-28 lg:h-full lg:justify-between lg:mb-0">
            <div>
                <Link to="/">
                    <h1 className="mb-2 text-4xl font-semibold">Krzysztof Płonka</h1>
                </Link>
                <h3 className="mb-4 text-lg lg:mb-16">Fullstack Developer</h3>
                <nav className="flex-col hidden lg:flex gap-y-4">
                    <NavItem to="#about" text="About" />
                    <NavItem to="#expirience" text="Expirience" />
                    <NavItem to="#projects" text="Projects" />
                </nav>
            </div>
            <div className="flex gap-x-3">
                <a href="https://github.com/tojestkrzysio/" target="blank">
                    <FontAwesomeIcon icon={faGithub} size="xl" className="ease-in-out text-slate-400 transition-color hover:text-slate-300" />
                </a>
                <a href="https://www.linkedin.com/in/krzysztof-plonka/" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" className="ease-in-out text-slate-400 transition-color hover:text-slate-300" />
                </a>
            </div>
        </header>
    )
}


function NavItem({ to, text }: { to: string, text: string }) {
    const location = useLocation();

    const isActive = location.hash === to
    return (
        <Link to={to} className="inline-flex items-center gap-x-2 group" data-active={isActive}>
            <hr className="w-8 border-slate-500 ease-in-out duration-300 group-hover:w-14 group-hover:border-slate-200 transition-[width] data-[active=true]:w-14 data-[active=true]:border-slate-200" data-active={isActive} />
            <span className="transition text-slate-500 ease-in-out duration-300  group-hover:text-slate-200 data-[active=true]:text-slate-200" data-active={isActive}>{text}</span>
        </Link>
    )
}
