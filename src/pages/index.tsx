import type {NextPage} from 'next'
import WindowRow from "../components/window/WindowRow";
import NowPlayingWindow from "../components/window/impl/NowPlayingWindow";
import AboutMeWindow from "../components/window/impl/AboutMeWindow";

const Home: NextPage = () => {
    return (
        <div className={"h-screen w-screen bg-background"}>
            <div className={"container p-4 md:pt-20 md:p-0 md:mx-auto"}>
                <WindowRow>
                    <AboutMeWindow/>
                    <NowPlayingWindow/>
                </WindowRow>
            </div>
        </div>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
