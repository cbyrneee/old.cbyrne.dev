import { CodeIcon, LinkIcon, TagIcon } from "@heroicons/react/solid"
import React from "react"
import styles from "../../styles/Projects.module.css"
import buttonStyles from "../../styles/Button.module.css"
import Card from "../Card"

export default function ProjectsSection() {
    return (
        <div id={"projects"} className={styles.projectsContainer}>
            <div className={styles.main}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.subtitle}>
                    A collection of my various projects that I have made
                </p>
                <div className={styles.cards}>
                    <Card
                        title={"Injector"}
                        subtitle={"Modify JVM classes at runtime with ease"}
                        content={
                            "A Kotlin library for modifying any class at runtime with stability and ease. You can modify method return values, access parameters, private fields and much much more."
                        }
                        links={[
                            {
                                name: "GitHub",
                                destination:
                                    "https://github.com/cbyrneee/Injector",
                            },
                        ]}
                    />
                    <Card
                        title={"KDiscordIPC"}
                        subtitle={"Interact with a discord client via IPC"}
                        content={
                            "A Kotlin library for interacting with the discord client locally via IPC. You can provide a rich presence quickly with the easy to use Kotlin DSL and more"
                        }
                        links={[
                            {
                                name: "GitHub",
                                destination:
                                    "https://github.com/cbyrneee/Injector",
                            },
                        ]}
                    />
                    <Card
                        title={"Audition"}
                        subtitle={"Find new artists on Spotify"}
                        content={
                            "A web application made with React which recommends artists on Spotify based on your music taste."
                        }
                        links={[
                            {
                                name: "Website",
                                destination: "https://audition.cbyrne.dev",
                            },
                            {
                                name: "GitHub",
                                destination:
                                    "https://github.com/cbyrneee/Audition",
                            },
                        ]}
                        image={
                            "https://audition.cbyrne.dev/android-chrome-192x192.png"
                        }
                    />
                    <Card
                        title={"dotto+"}
                        subtitle={
                            "Beautifully redesigned notification badges for your iOS device"
                        }
                        content={
                            "An iOS runtime modification for iOS 13 & 14 which changes your notification badges to unobtrusive small dots."
                        }
                        image={
                            "https://repo.dynastic.co/data/static/version/362632385163952128/385483070616109056?size=80"
                        }
                        links={[
                            {
                                name: "See more",
                                destination: "https://get.dyn.dev/dotto",
                            },
                        ]}
                    />
                    <Card
                        title={"LockWidgets"}
                        subtitle={
                            "Access your favourite widgets, directly on your lockscreen"
                        }
                        content={
                            "An iOS runtime modification for iOS 12 & 13 which allows you to display widgets directly on your lockscreen."
                        }
                        image={
                            "https://repo.dynastic.co/data/static/version/385473471443894272/385473471687163904?size=80"
                        }
                        links={[
                            {
                                name: "See more",
                                destination: "https://get.dyn.dev/lockwidgets",
                            },
                            {
                                name: "GitHub",
                                destination:
                                    "https://github.com/ConorTheDev/LockWidgets",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
