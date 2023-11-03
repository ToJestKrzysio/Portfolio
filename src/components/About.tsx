import Anchor from "@/components/Anchor"

export default function About() {
    return (
        <div className="flex flex-col text-slate-400 gap-y-5">
            <p>
                My IT adventure started in 2021, by building web apps for hardware management, from there I've fallen into the rabbit hole of web development.
            </p>
            <p>
                These days my focus is aimed at deepening my knowledge of microservices, could solutions and <Anchor href="https://kubernetes.io/">Kubernetes</Anchor>.
            </p >
            <p>
                When I'm not at the computer, You may find me cooking or cycling.
            </p>
        </div >
    )
}
