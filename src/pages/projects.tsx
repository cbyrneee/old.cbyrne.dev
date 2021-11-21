// noinspection JSUnusedGlobalSymbols

import type {NextPage} from 'next'
import React from "react";
import Head from "next/head";
import Dock from "../components/dock/Dock";
import WindowGroup from "../components/window/WindowGroup";
import ProjectWindow from "../components/window/impl/projects/ProjectWindow";

const Projects: NextPage = () => {
    return <>
        <Head>
            <title>Conor Byrne - Projects</title>
        </Head>

        <div
            className={"flex items-center content-center justify-between min-h-screen bg-background dark:bg-background-dark flex-col-reverse xl:flex-col"}
        >
            <WindowGroup>
                <ProjectWindow
                    title={"OPLegends"}
                    description={"I am working with OPLegends to help build new and exciting games on their network"}
                    href={"https://oplegends.com"}
                    buttonText={"Website"}
                />

                <ProjectWindow
                    title={"Kotlin Project Manager"}
                    description={"kpm (Kotlin Project Manager) is a lightweight tool for managing and building Kotlin projects."}
                    href={"https://github.com/cbyrneee/kpm"}
                    buttonText={"GitHub"}
                />

                <ProjectWindow
                    title={"KDiscordIPC"}
                    description={"A lightweight and easy to use Kotlin library for interacting with Discord via IPC."}
                    href={"https://github.com/cbyrneee/KDiscordIPC"}
                    buttonText={"GitHub"}
                />

                <ProjectWindow
                    title={"CompactChat"}
                    description={"A mod for Fabric 1.17 which removes duplicate messages from your chat."}
                    href={"https://github.com/cbyrneee/CompactChat"}
                    buttonText={"GitHub"}
                />
            </WindowGroup>

            <Dock/>
        </div>
    </>
}

export default Projects
