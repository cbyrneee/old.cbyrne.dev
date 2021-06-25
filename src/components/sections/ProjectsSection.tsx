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
                        title={"Injector"}
                        subtitle={"Modify JVM classes at runtime with ease"}
                        content={
                            "A Kotlin library for modifying any class at runtime with stability and ease in mind. You can modify return values, access parameters, private fields and much much more."
                        }
                        image={
                            "https://repo.dynastic.co/data/static/version/385473471443894272/385473471687163904?size=80"
                        }
                        links={[
                            {
                                name: "GitHub",
                                destination:
                                    "https://github.com/cbyrneee/Injector",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
