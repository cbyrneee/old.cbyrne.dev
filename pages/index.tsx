import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <>
            <Head>
                <title>dreamhopping</title>
                <meta
                    name="description"
                    content="Hey, I'm Conor! I'm a developer and student from Ireland."
                />
            </Head>

            <Header />
            <div className="p-4 mx-auto md:mx-0 md:p-8">
                <h1 className="title">My Projects</h1>
                <Projects></Projects>
            </div>
        </>
    );
}
