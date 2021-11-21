import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useDarkMode} from "../lib/hooks/useDarkMode";

function App({Component, pageProps}: AppProps) {
    useDarkMode()
    return <Component {...pageProps} />
}

// noinspection JSUnusedGlobalSymbols
export default App
