import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import LinkButton from "../../../control/LinkButton";

export default function ExperienceWindow() {
    return <Window>
        <h5 className={"text-3xl font-bold text-black/50 mb-2"}>Experience</h5>
        <h2 className={"text-2xl font-medium text-black/75 mb-4"}>Currently, I am working with OPLegends as a developer.
            We are building innovative gameplay experiences.</h2>

        <ButtonGroup>
            <LinkButton href={"https://oplegends.com/"}>
                OPLegends Website
            </LinkButton>
        </ButtonGroup>
    </Window>
}