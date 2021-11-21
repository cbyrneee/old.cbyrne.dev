import React, {Fragment} from 'react';
import {Dialog, Switch, Transition} from '@headlessui/react'
import Window from "../window/Window";
import Title from "../typography/Title";
import Body from '../typography/Body';
import useDarkMode from "../../lib/hooks/useDarkMode";

interface SettingsDialogProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export default function SettingsDialog({isOpen, setOpen}: SettingsDialogProps) {
    const [_, override, setOverride] = useDarkMode()

    function close() {
        setOpen(false);
    }

    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Dialog
                open={isOpen}
                onClose={close}
                className={"fixed z-10 inset-0 overflow-y-auto bg-black/50 flex items-center content-center justify-center"}
            >
                <div className="md:p-10 transition-all">
                    <Window
                        onClose={close}
                        onlyClose
                    >
                        <Title muted={false} bottomPadding={false}>Settings</Title>

                        <div className={"flex pt-8 gap-3"}>
                            <Body>Force Dark Mode</Body>

                            <Switch
                                checked={override}
                                onChange={setOverride}
                                className={`${
                                    override ? 'bg-accent' : 'bg-gray-400'
                                } relative inline-flex items-center h-8 rounded-full w-16 transition-all`}
                            >
                            <span
                                className={`${override ? 'translate-x-10' : 'translate-x-2'} inline-block w-4 h-4 transform transition-all bg-white rounded-full`}
                            />
                            </Switch>
                        </div>
                    </Window>
                </div>
            </Dialog>
        </Transition>
    )
}
