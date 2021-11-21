import React from 'react';
import Window from "../../Window";
import ButtonGroup from "../../../control/ButtonGroup";
import Button from "../../../control/Button";

export default function LinksWindow() {
    return <Window>
        <h5 className={"text-3xl font-bold text-black/50 mb-2"}>Links</h5>
        <h2 className={"text-2xl font-medium text-black/75 mb-4"}>Want to work with me? Let{"'"}s get in
            touch and build some great software together.</h2>

        <ButtonGroup>
            <a href={"https://github.com/cbyrneee"} target="_blank" rel="noreferrer">
                <Button>
                    GitHub
                </Button>
            </a>

            <a href={"mailto:hello@cbyrne.dev"} target="_blank" rel="noreferrer">
                <Button>
                    Email Me
                </Button>
            </a>
        </ButtonGroup>
    </Window>
}