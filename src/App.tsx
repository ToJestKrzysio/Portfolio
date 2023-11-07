import {ReactNode, useLayoutEffect, useRef, useState} from "react";

import {About, Card, Expirience, Header, Project} from "@/components";
import {useScrollRefToId} from "@/hooks";


export default function App() {
    const parentRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const expirienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useScrollRefToId([aboutRef, expirienceRef, projectsRef], parentRef, 28 * 4)

    const [{x, y}, setPosition] = useState({x: 0, y: 0});

    return (
        <div ref={parentRef}
             className="overflow-y-scroll bg-slate-900 selection:bg-lime-500/80 selection:text-slate-200"
             onMouseMove={event => {
                 if (event === undefined) return;
                 if (window.innerWidth < 1024) {
                     setPosition({x: 0, y: 0})
                     return
                 }
                 setPosition({x: event.clientX, y: event.clientY})
             }}
        >
            <div
                className="max-w-screen-xl max-h-screen py-16 lg:py-20 mx-auto px-10 lg:px-28 lg:grid lg:grid-cols-2 lg:pt-28 gap-x-3">
                <div className="fixed inset-0 pointer-events-none lg:absolute" style={{
                    background: `radial-gradient(600px at ${x}px ${y}px, rgba(101, 163, 13, 0.25), transparent)`,
                }}/>
                <Header/>
                <div className="flex flex-col col-start-2 gap-y-28 pb-28">
                    <section id="about" ref={aboutRef}>
                        <MobileOnlyHeader>About</MobileOnlyHeader>
                        <About/>
                    </section>
                    <Card.CardGroup id="expirience" ref={expirienceRef}>
                        <MobileOnlyHeader>Experience</MobileOnlyHeader>
                        <Expirience.SenseStreet/>
                        <Expirience.Umlaut/>
                        <Expirience.Aptiv/>
                    </Card.CardGroup>
                    <Card.CardGroup id="projects" ref={projectsRef}>
                        <MobileOnlyHeader>Projects</MobileOnlyHeader>
                        <Project.JungleGame/>
                        <Project.EventManager/>
                        <Project.IntroSpot/>
                    </Card.CardGroup>
                    <footer className="text-sm text-slate-400">
                        Built with <Card.WhiteAnchor
                        href="https://react.dev/">React</Card.WhiteAnchor> and <Card.WhiteAnchor
                        href="https://tailwindcss.com/">Tailwind CSS</Card.WhiteAnchor>.
                        Delivered to You from <Card.WhiteAnchor
                        href="https://aws.amazon.com/">AWS</Card.WhiteAnchor>.<br/>
                        Design based upon <Card.WhiteAnchor
                        href="https://brittanychiang.com/">brittanychiang.com</Card.WhiteAnchor>
                    </footer>
                </div>
            </div>
        </div>
    )
        ;
}

function MobileOnlyHeader({children}: { children: ReactNode }) {
    return <h4 className="inline-block lg:hidden text-lg font-semibold mb-3">{children}</h4>
}
