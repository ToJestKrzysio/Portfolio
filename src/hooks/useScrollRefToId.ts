import { RefObject, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollRefToId(refs: RefObject<HTMLDivElement>[], parent: RefObject<HTMLDivElement>, offset: number = 0) {
    const location = useLocation();

    useLayoutEffect(() => {
        if (parent.current === null) return
        if (location.hash === "") parent.current.scrollTo({ behavior: "smooth", top: 0 })


        const selectedRef = refs.find(ref => !!ref.current && ref.current.id === location.hash.slice(1))
        if (selectedRef === undefined || selectedRef.current === null) return

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
