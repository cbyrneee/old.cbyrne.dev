// noinspection JSUnusedGlobalSymbols

import type {GetStaticProps, GetStaticPropsContext, NextPage} from 'next'
import WindowRow from "../components/window/WindowRow";
import NowPlayingWindow from "../components/window/impl/NowPlayingWindow";
import AboutMeWindow from "../components/window/impl/AboutMeWindow";
import WindowGroup from "../components/window/WindowGroup";
import TrackData from "../lib/TrackData.interface";

interface HomeProps {
    nowPlayingCache: TrackData | undefined
}

const Home: NextPage<HomeProps> = ({nowPlayingCache}) => {
    return (
        <div className={"h-screen bg-background"}>
            <div className={"container p-4 md:pt-20 md:p-0 md:mx-auto"}>
                <WindowGroup>
                    <WindowRow>
                        <AboutMeWindow/>
                        <NowPlayingWindow cache={nowPlayingCache}/>
                    </WindowRow>
                </WindowGroup>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const request = await fetch("http://localhost:3000/api/track")
    const nowPlayingCache = await request.json()

    return {
        props: {
            nowPlayingCache
        },
        revalidate: 10
    }
}

export default Home
