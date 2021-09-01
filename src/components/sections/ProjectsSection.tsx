import React from "react"
import useSWR from "swr"
import { Project } from "../../lib/Project"
import styles from "../../styles/Projects.module.css"
import Card, { Link } from "../Card"

interface ProjectsSectionProps {
    projects: Project[]
}

export default function ProjectsSection(props: ProjectsSectionProps) {
    const isFirefox = global.window
        ? window.navigator.userAgent.includes("Firefox")
        : false
    const { data, error } = useSWR<Project[]>("/api/projects", {
        initialData: isFirefox ? undefined : props.projects,
    })

    return (
        <div id={"projects"} className={styles.projectsContainer}>
            <div className={styles.main}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.subtitle}>
                    A collection of my various projects that I have made
                </p>
                {data ? (
                    <div className={styles.cards}>
                        {data
                            .sort((a, b) => {
                                return a.name.toLowerCase() >
                                    b.name.toLowerCase()
                                    ? 1
                                    : -1
                            })
                            .map((project) => {
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
                ) : error ? (
                    <p className={styles.infoMessage}>Error!</p>
                ) : (
                    <p className={styles.infoMessage}>Loading...</p>
                )}
            </div>
        </div>
    )
}
