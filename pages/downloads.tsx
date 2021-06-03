import Head from "next/head";
import React from "react";
import Downloads from "../components/Downloads";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function DownloadsPage() {
    return (
        <>
            <Head>
                <title>Conor Byrne - Downloads</title>
                <meta
                    name="description"
                    content="Get the latest downloads of my projects"
                />
            </Head>

            <Header
                title="Downloads"
                subtitle="Get the latest downloads of my projects"
            />
            <div className="p-4 mx-auto md:mx-0 md:p-8">
                <h1 className="title">Downloads</h1>
                <Downloads />
            </div>
        </>
    );
}
