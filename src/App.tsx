import { useLocation } from "react-router";
import { RefObject, useLayoutEffect, useRef } from "react";

import { About, Expirience, Header } from "@/components";

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
                    <section id="expirience" ref={expirienceRef}>
                        <Expirience />
                        <Expirience />
                        <Expirience />
                    </section>
                    <section id="projects" ref={projectsRef}>
                        <div className="h-[600px] w-full bg-lime-700" />
                    </section>
                    <footer>
                        Built with React and Tailwind CSS. Delivered to You from AWS S3.
                    </footer>
                </div>
            </div>
        </div>
    );
}



function useScrollRefToId(refs: RefObject<HTMLDivElement>[], parent: RefObject<HTMLDivElement>, offset: number = 0) {
    const location = useLocation();

    useLayoutEffect(() => {
        if (parent.current === null) return
        if (location.hash === "") parent.current.scrollTo({ behavior: "smooth", top: 0 })


        const selectedRef = refs.find(ref => !!ref.current && ref.current.id === location.hash.slice(1))
        if (selectedRef === undefined || selectedRef.current === null) return

        console.log("sel", selectedRef.current.getBoundingClientRect())
        console.log("par", parent.current.getBoundingClientRect())
        console.log("comp", (selectedRef.current!.getBoundingClientRect().top - parent.current.getBoundingClientRect().top - offset))

        parent.current.scrollBy({
            behavior: "smooth",
            top: (
                selectedRef.current!.getBoundingClientRect().top -
                parent.current.getBoundingClientRect().top -
                offset
            )
        })
    }, [location, refs])
}
