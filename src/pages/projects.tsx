// noinspection JSUnusedGlobalSymbols

import type {NextPage} from 'next'
import React from "react";
import Head from "next/head";
import Dock from "../components/dock/Dock";

const Projects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Conor Byrne - Projects</title>
            </Head>
            <div
                className={"flex flex-col items-center content-center justify-between h-full md:h-screen bg-background"}>

                <Dock />
            </div>
        </div>
    )
}

export default Projects
