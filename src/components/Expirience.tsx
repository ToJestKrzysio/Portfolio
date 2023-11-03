import { ReactNode } from "react"

export function Container({ children }: { children: ReactNode }) {
    return <div className="relative p-5 pl-32 transition-colors ease-in-out rounded-lg group hover:bg-slate-700/30">
        {children}
    </div>
}

export function TimeLine({ children }: { children: ReactNode }) {
    return <span className="absolute font-light capitalize text-slate-500 left-5">{children}</span>
}

export function Header({ position, company, linkTo }: { position: string, company: string, linkTo: string }) {
    return <a href={linkTo} target="blank" className="inline-block mb-3 font-medium transition ease-in-out group-hover:text-lime-400">
        <span>
            {position} - {company}
        </span>
    </a>
}

export function Content({ children }: { children: ReactNode }) {
    return <span className="block">{children}</span>
}

export default function Exp() {
    return (
        <Container>
            <TimeLine>2011 - Now</TimeLine>
            <Header position="Super Dev" company="WaloCorp" linkTo="https://google.com/" />
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quo est natus pariatur! Voluptates explicabo, consequatur saepe laudantium reprehenderit possimus, sapiente porro unde voluptatem molestias officia? Omnis explicabo in tempora?
            </Content>
        </Container>
    )
}
