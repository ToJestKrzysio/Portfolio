import { ComponentProps, ReactNode } from "react"
import { Anchor as DefaultAnchor } from "@/components"

export function Container({ children }: { children: ReactNode }) {
    return <div className="relative p-5 pl-32 transition-colors ease-in-out rounded-lg group hover:bg-slate-700/30">
        {children}
    </div>
}

export function Sidebar({ children }: { children: ReactNode }) {
    return <span className="absolute font-light capitalize text-slate-500 left-5">{children}</span>
}

export function Anchor({ children, href }: ComponentProps<typeof DefaultAnchor>) {
    return <DefaultAnchor href={href} className="group-hover:text-lime-500">{children}</DefaultAnchor>
}

export function Content({ children }: { children: ReactNode }) {
    return <span className="block">{children}</span>
}
