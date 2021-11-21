import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import LinkButton from "../../../control/LinkButton";

export default function LinksWindow() {
    return <Window>
        <h5 className={"text-3xl font-bold text-black/50 mb-2"}>Links</h5>
        <h2 className={"text-2xl font-medium text-black/75 mb-4"}>Want to work with me? Let{"'"}s get in
            touch and build some great software together.</h2>

        <ButtonGroup>
            <LinkButton href={"https://github.com/cbyrneee"}>
                GitHub
            </LinkButton>

            <LinkButton href={"mailto:hello@cbyrne.dev"}>
                Email Me
            </LinkButton>
        </ButtonGroup>
    </Window>
}