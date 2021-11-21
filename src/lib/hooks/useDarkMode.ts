import {useEffect, useState} from "react";
import useMediaQuery from "./useMediaQuery";
import useLocalStorage from "use-local-storage";

export default function useDarkMode(): [boolean, boolean, (override: boolean) => void] {
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
    const [enabled, setEnabled] = useState(prefersDark)
    const [override, setOverride] = useLocalStorage<boolean>("should-force-dark", false)

    useEffect(() => {
        if (override) {
            setEnabled(override)
        } else {
            setEnabled(prefersDark)
        }

        const html = document.querySelector("html")
        if (html) html.classList.toggle("dark", enabled)
    }, [enabled, setEnabled, prefersDark, override])

    return [enabled, override, (override) => {
        setOverride(override)
    }]
}