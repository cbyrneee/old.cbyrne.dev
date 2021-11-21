import React, {Fragment, useState} from 'react';
import {Dialog, Switch, Transition} from '@headlessui/react'
import Window from "../window/Window";
import Title from "../typography/Title";
import Body from '../typography/Body';

interface SettingsDialogProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export default function SettingsDialog({isOpen, setOpen}: SettingsDialogProps) {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

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
                        <Title muted={false}>Settings</Title>
                        <Title>A very fancy settings menu!</Title>

                        <div className={"flex pt-8 gap-3"}>
                            <Body>Use Dark Mode</Body>

                            <Switch
                                checked={darkModeEnabled}
                                onChange={setDarkModeEnabled}
                                className={`${
                                    darkModeEnabled ? 'bg-accent' : 'bg-gray-300'
                                } relative inline-flex items-center h-8 rounded-full w-16 transition-all`}
                            >
                            <span
                                className={`${darkModeEnabled ? 'translate-x-10' : 'translate-x-2'} inline-block w-4 h-4 transform transition-all bg-white rounded-full`}
                            />
                            </Switch>
                        </div>
                    </Window>
                </div>
            </Dialog>
        </Transition>
    )
}
