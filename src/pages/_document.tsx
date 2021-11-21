import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document"
import React from "react";
import useDarkMode from "../lib/hooks/useDarkMode";

// noinspection HtmlRequiredTitleElement,JSUnusedGlobalSymbols
export default class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content="#F8D0CD"/>
                    <meta name="title" content="Conor Byrne - Professional Developer"/>
                    <meta
                        name="description"
                        content="I am a developer based in Ireland with experience in Kotlin, Java and Typescript. Currently working with OPLegends!"
                    />

                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://cbyrne.dev/"/>
                    <meta property="og:title" content="Conor Byrne - Professional Developer"/>
                    <meta
                        property="og:description"
                        content="I am a developer based in Ireland with experience in Kotlin, Java and Typescript. Currently working with OPLegends!"
                    />

                    <meta property="twitter:card" content="summary"/>
                    <meta property="twitter:url" content="https://cbyrne.dev/"/>
                    <meta property="twitter:title" content="Conor Byrne - Professional Developer"/>
                    <meta
                        property="twitter:description"
                        content="I am a developer based in Ireland with experience in Kotlin, Java and Typescript. Currently working with OPLegends!"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
