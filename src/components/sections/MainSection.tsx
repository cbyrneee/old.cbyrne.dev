import React from "react"
import { Link } from "react-scroll"
import Button from "../Button"
import styles from "../styles/Landing.module.css"

export default function MainSection() {
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
                        icon={["fab", "github"]}
                        destination={"https://github.com/cbyrneee"}
                    />
                    <Button
                        name={"Contact"}
                        icon={["fas", "envelope"]}
                        destination={"mailto:hello@cbyrne.dev"}
                    />
                </div>
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