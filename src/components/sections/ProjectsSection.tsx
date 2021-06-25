import React from "react"
import styles from "../../styles/Projects.module.css"

function ProjectCard() {
    return <div></div>
}

export default function ProjectsSection() {
    return (
        <div id={"projects"} className={styles.projectsContainer}>
            <div className={styles.main}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.subtitle}>
                    A collection of my various projects that I have made
                </p>
                <div className={styles.cards}>
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}
