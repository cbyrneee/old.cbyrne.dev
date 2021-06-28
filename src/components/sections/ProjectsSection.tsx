import React from "react"
import useSWR from "swr"
import { Project } from "../../lib/Project"
import styles from "../../styles/Projects.module.css"
import Card, { Link } from "../Card"

export default function ProjectsSection() {
    const { data, error } = useSWR<Project[]>("/api/projects")

    return (
        <div id={"projects"} className={styles.projectsContainer}>
            <div className={styles.main}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.subtitle}>
                    A collection of my various projects that I have made
                </p>
                {error ? (
                    <p className={styles.errorMessage}>
                        Failed to load projects!
                    </p>
                ) : data ? (
                    data && (
                        <div className={styles.cards}>
                            {data.map((project) => {
                                const links: Link[] = []

                                if (project.github) {
                                    links.push({
                                        name: "GitHub",
                                        destination: project.github,
                                    })
                                }

                                if (project.website) {
                                    links.push({
                                        name: "Website",
                                        destination: project.website,
                                    })
                                }

                                return (
                                    <Card
                                        key={project.id}
                                        title={project.name}
                                        subtitle={project.subtitle}
                                        content={project.description}
                                        image={
                                            project.icon
                                                ? `/api/image/${project.icon.hash}`
                                                : null
                                        }
                                        links={links}
                                    />
                                )
                            })}
                        </div>
                    )
                ) : (
                    <p className={styles.infoMessage}>Loading...</p>
                )}
            </div>
        </div>
    )
}
