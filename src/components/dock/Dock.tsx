import ButtonGroup from "../control/ButtonGroup";
import {CollectionIcon, HomeIcon} from "@heroicons/react/solid";
import React from "react";
import {useRouter} from "next/router";
import Window from "../window/Window";
import TooltipLinkButton from "../control/TooltipLinkButton";

export default function Dock() {
    const router = useRouter();

    return (
        <div className={"flex p-4 md:p-0 md:m-auto h-3/12"}>
            <Window removeDecoration>
                <ButtonGroup>
                    <TooltipLinkButton
                        href={"/"}
                        inactive={router.asPath != "/"}
                        tooltip={"Home"}
                        dontOpenNewTab
                    >
                        <HomeIcon className={"w-10"}/>
                    </TooltipLinkButton>

                    <TooltipLinkButton
                        href={"/projects"}
                        inactive={router.asPath != "/projects"}
                        tooltip={"Projects"}
                        dontOpenNewTab
                    >
                        <CollectionIcon className={"w-10"}/>
                    </TooltipLinkButton>
                </ButtonGroup>
            </Window>
        </div>
    );
}
