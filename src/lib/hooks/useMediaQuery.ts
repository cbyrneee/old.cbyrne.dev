import {useEffect, useState} from "react";

export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const matcher = window.matchMedia(query)
        matcher.addEventListener("change", (event) => {
            setMatches(event.matches)
        })

        setMatches(matcher.matches)
    }, [matches, query])

    return matches
}