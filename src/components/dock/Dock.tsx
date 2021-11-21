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
                <div className={"flex gap-4 flex-row justify-between"}>
                    <div className={"flex gap-4 flex-row justify-between"}>
                        <LinkButton
                            href={"/"}
                            inactive={router.asPath != "/"}
                            dontOpenNewTab
                        >
                            <div className={"flex gap-3 text-2xl"}>
                                <HomeIcon className={"w-7"}/>
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
                            <div className={"flex gap-3 text-2xl"}>
                                <CollectionIcon className={"w-7"}/>
                                <div className={"hidden md:block"}>
                                    Projects
                                </div>
                            </div>
                        </LinkButton>
                    </div>

                    <ClickableButton
                        onClick={() => {
                            setShowingSettings(true)
                        }}
                    >
                        <CogIcon className={"w-7"}/>
                    </ClickableButton>
                </div>
            </Window>
        </div>
    );
}
