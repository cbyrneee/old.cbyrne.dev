import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document"
import React from "react";

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
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
