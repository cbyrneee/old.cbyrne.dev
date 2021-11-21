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
import Head from "next/head";
import Dock from "../components/dock/Dock";

interface HomeProps {
    nowPlayingCache: TrackData | undefined
}

const Home: NextPage<HomeProps> = ({nowPlayingCache}) => {
    return (
        <div>
            <Head>
                <title>Conor Byrne</title>
            </Head>
            <div
                className={"flex flex-col items-center content-center justify-between h-full md:h-screen bg-background"}>
                <div className={"container p-4 md:p-0 md:m-auto"}>
                    <WindowGroup>
                        <WindowRow>
                            <AboutMeWindow/>
                            <NowPlayingWindow cache={nowPlayingCache}/>

                            <LinksWindow/>
                            <ExperienceWindow/>
                        </WindowRow>
                    </WindowGroup>
                </div>

                <Dock/>
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
