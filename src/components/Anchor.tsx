import { ReactNode } from "react";

export default function Anchor({ href, children, className = "" }: { href: string, children: ReactNode, className?: string }) {
    return <a
        href={href}
        target="_blank"
        className={`font-semibold transition-colors ease-in-out hover:text-lime-500 ${className}`}
    >{children}</a>
}
