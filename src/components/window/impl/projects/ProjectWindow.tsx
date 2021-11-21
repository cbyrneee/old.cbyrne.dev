import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import LinkButton from "../../../control/LinkButton";
import Title from "../../../typography/Title";
import Body from "../../../typography/Body";

interface ProjectWindowProps {
    title: string;
    description: string;

    href: string;
    buttonText: string
}

export default function ProjectWindow(props: ProjectWindowProps) {
    return <Window>
        <Title>{props.title}</Title>
        <Body bottomPadding>{props.description}</Body>

        <ButtonGroup>
            <LinkButton href={props.href}>
                {props.buttonText}
            </LinkButton>
        </ButtonGroup>
    </Window>
}