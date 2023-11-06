import { ComponentProps, ForwardedRef, ReactNode, forwardRef } from "react"
import { Anchor as DefaultAnchor } from "@/components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export const CardGroup = forwardRef((
    { children, id }: { children: ReactNode, id?: string },
    ref: ForwardedRef<HTMLDivElement>
) => (
    <section id={id} className="group/cards" ref={ref}>
        {children}
    </section>
))

export function Container({ children }: { children: ReactNode }) {
    return <div className="relative p-5 pl-36 transition-all duration-500 ease-in-out rounded-lg group hover:bg-slate-700/30  hover:!opacity-100 group-hover/cards:opacity-50">
        {children}
    </div>
}

export function Sidebar({ children }: { children: ReactNode }) {
    return <span className="absolute text-xs font-light capitalize text-slate-500 left-5">{children}</span>
}

export function SidebarImage({ src, alt }: { src: string, alt: string }) {
    return <img src={src} alt={alt} className="absolute object-cover w-24 h-16 rounded-md left-5" />
}


export function Anchor({ children, href }: ComponentProps<typeof DefaultAnchor>) {
    return <DefaultAnchor href={href} className="group-hover:text-lime-500">{children}</DefaultAnchor>
}

export function Content({ children }: { children: ReactNode }) {
    return <span className="block">{children}</span>
}

export function Tags({ tags }: { tags: string[] }) {
    return <ul className="flex flex-wrap pt-3 gap-x-2 gap-y-2">
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </ul>
}

export function Tag({ children }: { children: ReactNode }) {
    return <span className="px-2 py-1 text-xs font-medium rounded-lg text-lime-500 bg-lime-500/10 whitespace-nowrap">{children}</span>
}

export const WhiteAnchor = (props: ComponentProps<typeof Anchor>) => <Anchor className="text-slate-200" {...props} />
export const HeaderAnchor = ({ href, children }: ComponentProps<typeof Anchor>) => (
    <Anchor href={href}>
        <h2 className="mb-2">
            {children} <FontAwesomeIcon icon={faLink} className="ml-1" />
        </h2>
    </Anchor>
)
