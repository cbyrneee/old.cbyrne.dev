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
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
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
        props: { data },
        revalidate: 300,
    }
}

/**
 *    <footer className={styles.footer}>
        <p>Coded and designed with ❤️ by Conor Byrne</p>
      </footer>
 */
