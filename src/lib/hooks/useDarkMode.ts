import {useEffect, useState} from "react";
import useMediaQuery from "./useMediaQuery";
import {createLocalStorageStateHook} from "use-local-storage-state";

export const useDarkModeOverride = createLocalStorageStateHook<boolean>("should-force-dark", false)

export function useDarkMode(): boolean {
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
    const [enabled, setEnabled] = useState(prefersDark)
    const [override] = useDarkModeOverride()

    useEffect(() => {
        if (override) {
            setEnabled(override)
        } else {
            setEnabled(prefersDark)
        }

        const html = document.querySelector("html")
        if (html) html.classList.toggle("dark", enabled)
    }, [enabled, setEnabled, prefersDark, override])

    return enabled
}