// noinspection JSUnusedGlobalSymbols

import type {GetStaticProps, NextPage} from 'next'
import NowPlayingWindow from "../components/window/impl/home/NowPlayingWindow";
import AboutMeWindow from "../components/window/impl/home/AboutMeWindow";
import WindowGroup from "../components/window/WindowGroup";
import TrackData from "../lib/TrackData.interface";
import getTrack from "../lib/getTrack";
import React from "react";
import LinksWindow from "../components/window/impl/home/LinksWindow";
import ExperienceWindow from "../components/window/impl/home/ExperienceWindow";
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
                className={"flex flex-col items-center content-center justify-between h-full md:h-screen bg-background"}
            >
                <WindowGroup>
                    <AboutMeWindow/>
                    <LinksWindow/>
                    <NowPlayingWindow cache={nowPlayingCache}/>
                    <ExperienceWindow/>
                </WindowGroup>

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
