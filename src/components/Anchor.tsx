import { ReactNode } from "react";

export default function Anchor({ href, children }: { href: string, children: ReactNode }) {
    return <a
        href={href}
        target="_blank"
        className="font-semibold transition-colors ease-in-out hover:text-lime-500"
    >{children}</a>
}
