import { GetStaticPropsContext } from "next"
import Head from "next/head"
import React from "react"

import MainSection from "../components/sections/MainSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import { Project } from "../lib/Project"

interface LandingProps {
    data: Project[]
}

export default function Landing(props: LandingProps) {
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
            <ProjectsSection projects={props.data} />
        </>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const res = await fetch(`${process.env.STRAPI_URL}/projects`)
    const data = await res.json()

    if (!res.ok || !data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

/**
 *    <footer className={styles.footer}>
        <p>Coded and designed with ❤️ by Conor Byrne</p>
      </footer>
 */
