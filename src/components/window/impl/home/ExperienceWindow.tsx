import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import LinkButton from "../../../control/LinkButton";
import Title from "../../../typography/Title";
import Body from "../../../typography/Body";

export default function ExperienceWindow() {
    return <Window>
        <Title>Occupation</Title>
        <Body bottomPadding>Currently, I am working with OPLegends as a developer. We are building innovative gameplay experiences.</Body>

        <ButtonGroup>
            <LinkButton href={"https://oplegends.com/"}>
                OPLegends Website
            </LinkButton>
        </ButtonGroup>
    </Window>
}