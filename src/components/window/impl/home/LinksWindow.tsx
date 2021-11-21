import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import LinkButton from "../../../control/LinkButton";
import Title from "../../../typography/Title";
import Body from "../../../typography/Body";

export default function LinksWindow() {
    return <Window>
        <Title>Links</Title>
        <Body bottomPadding>Want to work with me? Let{"'"}s get in touch and build some great software together.</Body>

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