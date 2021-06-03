import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <>
            <Head>
                <title>Conor Byrne</title>
                <meta
                    name="description"
                    content="Hey, I'm Conor! I'm a developer and student from Ireland."
                />
            </Head>

            <Header
                title="Hey, I'm Conor 👋"
                subtitle="I'm a developer and student from Ireland"
            />
            <div className="p-4 mx-auto md:mx-0 md:p-8">
                <h1 className="title">Projects</h1>
                <Projects></Projects>
            </div>
        </>
    );
}
