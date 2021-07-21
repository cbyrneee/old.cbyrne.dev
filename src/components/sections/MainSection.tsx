import React from "react"
import Button from "../Button"
import styles from "../../styles/Landing.module.css"
import buttonStyles from "../../styles/Button.module.css"
import useSWR from "swr"
import NowPlaying from "../NowPlaying"

import { Link } from "react-scroll"
import { Song } from "../../lib/Song"
import { CodeIcon, ChatIcon } from "@heroicons/react/solid"

export default function MainSection() {
    const { data, error } = useSWR<Song>("/api/track", {
        refreshInterval: 15000,
    })

    return (
        <div className={styles.landingContainer}>
            <main className={styles.main}>
                <h1 className={styles.title}>Conor Byrne</h1>

                <p className={styles.subtitle}>
                    Java, Kotlin and Web Developer
                </p>

                <div className={styles.controls}>
                    <div className={styles.buttonContainer}>
                        <Button
                            name={"GitHub"}
                            icon={<CodeIcon className={buttonStyles.icon} />}
                            destination={"https://github.com/cbyrneee"}
                        />
                        <Button
                            name={"Contact"}
                            icon={<ChatIcon className={buttonStyles.icon} />}
                            destination={"https://twitter.com/cbyrnedev"}
                        />
                    </div>

                    {data && !error && (
                        <div className={styles.lastFMInfo}>
                            <NowPlaying song={data} />
                        </div>
                    )}
                </div>
            </main>

            <Link
                className={styles.scrollIndicator}
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <div className="flex flex-col text-center items-center">
                    <p className="pb-6 dark:text-gray-200 opacity-0 lg:opacity-100">
                        Scroll to <strong>Projects</strong>
                    </p>
                    <svg
                        className={styles.scrollImage}
                        width="30"
                        height="19"
                        viewBox="0 0 30 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M26.475 0.474976L15 11.925L3.525 0.474976L0 3.99997L15 19L30 3.99997L26.475 0.474976Z" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}
