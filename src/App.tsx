import { useRef } from "react";

import { About, Card, Expirience, Header, Project } from "@/components";
import { useScrollRefToId } from "@/hooks";


export default function App() {
    const parentRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const expirienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useScrollRefToId([aboutRef, expirienceRef, projectsRef], parentRef, 28 * 4)

    return (
        <div ref={parentRef} className="overflow-y-scroll bg-slate-900 selection:bg-lime-500/80 selection:text-slate-200">
            <div className="max-w-screen-xl max-h-screen py-20 mx-auto px-28 lg:grid lg:grid-cols-2 lg:pt-28 gap-x-3 ">
                {/* <div className="fixed inset-0 pointer-events-none lg:absolute" style={{
                background: "radial-gradient(500px at top right, rgba(101, 163, 13, 0.4), transparent)",
            }} /> */}
                <Header />
                <div className="flex flex-col col-start-2 gap-y-28 pb-28">
                    <section id="about" ref={aboutRef}>
                        <About />
                    </section>
                    <Card.CardGroup id="expirience" ref={expirienceRef}>
                        <Expirience.SenseStreet />
                        <Expirience.Umlaut />
                        <Expirience.Aptiv />
                    </Card.CardGroup>
                    <Card.CardGroup id="projects" ref={projectsRef}>
                        <Project />
                        <Project />
                        <Project />
                    </Card.CardGroup>
                    <footer>
                        Built with React and Tailwind CSS. Delivered to You from AWS S3.
                    </footer>
                </div>
            </div>
        </div>
    );
}
