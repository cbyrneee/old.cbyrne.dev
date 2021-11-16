import React from "react"
import Button from "../Button"
import styles from "../../styles/Landing.module.css"
import buttonStyles from "../../styles/Button.module.css"
import useSWR from "swr"
import NowPlaying from "../NowPlaying"

import { Song } from "../../lib/Song"
import { CodeIcon, MailIcon } from "@heroicons/react/solid"

export default function MainSection() {
    const { data, error } = useSWR<Song>("/api/track", {
        refreshInterval: 15000,
    })

    return (
        <div className={styles.landingContainer}>
            <main className={styles.main}>
                <h1 className={styles.title}>Conor Byrne</h1>

                <p className={styles.subtitle}>
                    Java, Kotlin and Web Developer.
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
                            icon={<MailIcon className={buttonStyles.icon} />}
                            destination={"mailto:hello@cbyrne.dev"}
                        />
                    </div>

                    {data && !error && (
                        <div className={styles.lastFMInfo}>
                            <NowPlaying song={data} />
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
