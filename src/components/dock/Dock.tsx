import {CogIcon, CollectionIcon, HomeIcon} from "@heroicons/react/solid";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Window from "../window/Window";
import LinkButton from "../control/LinkButton";
import SettingsDialog from "../settings/SettingsDialog";
import ClickableButton from "../control/ClickableButton";

export default function Dock() {
    const router = useRouter();
    const [isShowingSettings, setShowingSettings] = useState(false)

    return (
        <div className={"container p-4 md:p-2 2xl:p-0 md:m-auto"}>
            <SettingsDialog isOpen={isShowingSettings} setOpen={setShowingSettings}/>

            <Window removeDecoration>
                <div className={"grid grid-cols-2 gap-4 place-content-center sm:place-content-start"}>
                    <div className={"flex flex-row gap-4 place-self-start"}>
                        <LinkButton
                            href={"/"}
                            inactive={router.asPath != "/"}
                            dontOpenNewTab
                        >
                            <div className={"grid grid-flow-col gap-3 items-center text-2xl"}>
                                <HomeIcon className={"w-6"}/>
                                <div className={"hidden md:block"}>
                                    Home
                                </div>
                            </div>
                        </LinkButton>

                        <LinkButton
                            href={"/projects"}
                            inactive={router.asPath != "/projects"}
                            dontOpenNewTab
                        >
                            <div className={"grid grid-flow-col gap-3 items-center text-2xl"}>
                                <CollectionIcon className={"w-6"}/>
                                <div className={"hidden md:block"}>
                                    Projects
                                </div>
                            </div>
                        </LinkButton>
                    </div>

                    <div className={"place-self-end"}>
                        <ClickableButton
                            onClick={() => {
                                setShowingSettings(true)
                            }}
                        >
                            <div className={"grid grid-flow-col gap-3 items-center text-2xl"}>
                                <CogIcon className={"w-6 text-2xl"}/>
                                <div className={"hidden md:block"}>
                                    Settings
                                </div>
                            </div>
                        </ClickableButton>
                    </div>
                </div>
            </Window>
        </div>
    );
}
