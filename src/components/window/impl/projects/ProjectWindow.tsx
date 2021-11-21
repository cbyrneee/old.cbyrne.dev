import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import LinkButton from "../../../control/LinkButton";

interface ProjectWindowProps {
    title: string;
    description: string;

    href: string;
    buttonText: string
}

export default function ProjectWindow(props: ProjectWindowProps) {
    return <Window>
        <h2 className={"text-3xl font-bold text-black/50 mb-2"}>{props.title}</h2>
        <h5 className={"text-2xl font-medium text-black/75 mb-4"}>
            {props.description}
        </h5>

        <ButtonGroup>
            <LinkButton href={props.href}>
                {props.buttonText}
            </LinkButton>
        </ButtonGroup>
    </Window>
}