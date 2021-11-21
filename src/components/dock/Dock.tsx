import ButtonGroup from "../control/ButtonGroup";
import LinkButton from "../control/LinkButton";
import {CollectionIcon, HomeIcon} from "@heroicons/react/solid";
import React from "react";
import {useRouter} from "next/router";
import Window from "../window/Window";

export default function Dock() {
    const router = useRouter();

    return (
        <div className={"flex p-4 md:p-0 md:m-auto"}>
            <Window noButtons>
                <ButtonGroup>
                    <LinkButton href={"/"} inactive={router.asPath != "/"} dontOpenNewTab>
                        <HomeIcon className={"w-10"}/>
                    </LinkButton>

                    <LinkButton href={"/projects"} inactive={router.asPath != "/projects"} dontOpenNewTab>
                        <CollectionIcon className={"w-10"}/>
                    </LinkButton>
                </ButtonGroup>
            </Window>
        </div>
    );
}
