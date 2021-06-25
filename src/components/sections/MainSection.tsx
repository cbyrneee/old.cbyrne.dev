import React from "react"
import { Link } from "react-scroll"
import Button from "../Button"
import styles from "../../styles/Landing.module.css"
import buttonStyles from "../../styles/Button.module.css"
import useSWR from "swr"
import LastFM from "../LastFM"
import { Song } from "../../lib/Song"
import { MailIcon, CodeIcon } from "@heroicons/react/solid"

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
                        <LastFM song={data} />
                    </div>
                )}
            </main>

            <Link
                className={styles.scrollIndicator}
                to="projects"
                spy={true}
                smooth={true}
                duration={1000}
            >
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
            </Link>
        </div>
    )
}
