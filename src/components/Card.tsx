import { ComponentProps, ForwardedRef, ReactNode, forwardRef } from "react"
import { Anchor as DefaultAnchor } from "@/components"

export const CardGroup = forwardRef((
    { children, id }: { children: ReactNode, id?: string },
    ref: ForwardedRef<HTMLDivElement>
) => (
    <section id={id} className="group/cards" ref={ref}>
        {children}
    </section>
))

export function Container({ children }: { children: ReactNode }) {
    return <div className="relative p-5 pl-32 transition-all ease-in-out rounded-lg group hover:bg-slate-700/30  hover:!opacity-100 group-hover/cards:opacity-50">
        {children}
    </div>
}

export function Sidebar({ children }: { children: ReactNode }) {
    return <span className="absolute font-light capitalize text-slate-500 left-5">{children}</span>
}

export function SidebarImage({ src, alt }: { src: string, alt: string }) {
    return <img src={src} alt={alt} className="absolute object-cover w-20 h-16 rounded-md left-5" />
}


export function Anchor({ children, href }: ComponentProps<typeof DefaultAnchor>) {
    return <DefaultAnchor href={href} className="group-hover:text-lime-500">{children}</DefaultAnchor>
}

export function Content({ children }: { children: ReactNode }) {
    return <span className="block">{children}</span>
}
