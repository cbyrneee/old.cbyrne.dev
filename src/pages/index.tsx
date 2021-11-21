// noinspection JSUnusedGlobalSymbols

import type {GetStaticProps, NextPage} from 'next'
import WindowRow from "../components/window/WindowRow";
import NowPlayingWindow from "../components/window/impl/NowPlayingWindow";
import AboutMeWindow from "../components/window/impl/AboutMeWindow";
import WindowGroup from "../components/window/WindowGroup";
import TrackData from "../lib/TrackData.interface";
import getTrack from "../lib/getTrack";
import React from "react";
import LinksWindow from "../components/window/impl/LinksWindow";
import ExperienceWindow from "../components/window/impl/ExperienceWindow";

interface HomeProps {
    nowPlayingCache: TrackData | undefined
}

const Home: NextPage<HomeProps> = ({nowPlayingCache}) => {
    return (
        <div className={"md:h-screen h-full bg-background"}>
            <div className={"container p-4 md:pt-20 md:p-0 md:mx-auto"}>
                <WindowGroup>
                    <WindowRow>
                        <AboutMeWindow/>
                        <NowPlayingWindow cache={nowPlayingCache}/>

                        <LinksWindow/>
                        <ExperienceWindow/>
                    </WindowRow>
                </WindowGroup>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const nowPlayingCache = await getTrack()

    return {
        props: {
            nowPlayingCache
        },
        revalidate: 10
    }
}

export default Home
