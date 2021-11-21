import React from 'react';
import Window from "../Window";
import ButtonGroup from "../../control/ButtonGroup";
import Button from "../../control/Button";

export default function ExperienceWindow() {
    return <Window>
        <h5 className={"text-3xl font-bold text-black/50 mb-2"}>Experience</h5>
        <h2 className={"text-2xl font-medium text-black/75 mb-4"}>Currently, I am working with OPLegends as a developer.</h2>

        <ButtonGroup>
            <a href={"https://oplegends.com/"} target="_blank" rel="noreferrer">
                <Button>
                    OPLegends Website
                </Button>
            </a>
        </ButtonGroup>
    </Window>
}