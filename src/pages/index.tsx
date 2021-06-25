import Head from "next/head"
import React from "react"

import MainSection from "../components/sections/MainSection"
import ProjectsSection from "../components/sections/ProjectsSection"

export default function Landing() {
    return (
        <>
            <Head>
                <title>Conor Byrne</title>
                <meta
                    name="description"
                    content="Hi, I'm Conor. I'm a Java, Kotlin and Web Developer."
                />
            </Head>

            <MainSection />
            <ProjectsSection />
        </>
    )
}

/**
 *    <footer className={styles.footer}>
        <p>Coded and designed with ❤️ by Conor Byrne</p>
      </footer>
 */
