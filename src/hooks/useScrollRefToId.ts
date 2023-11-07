import {RefObject, useLayoutEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export default function useScrollRefToId(refs: RefObject<HTMLDivElement>[], parent: RefObject<HTMLDivElement>, offset: number = 0) {
    const location = useLocation();
    const [hash, setHash] = useState("");

    useLayoutEffect(() => {
        if (parent.current === null) return
        if (hash === location.hash) return
        setHash(location.hash)

        if (location.hash === "") {
            console.log("Scroll to top")
            parent.current.scrollTo({ behavior: "smooth", top: 0 })
            return
        }


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
