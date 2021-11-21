import React from 'react';
import Button from "./Button";

interface ClickableButtonProps {
    children: React.ReactNode;
    inactive?: boolean;
    onClick: () => void;
}

export default function ClickableButton(props: ClickableButtonProps) {
    return (
        <button onClick={props.onClick}>
            <Button inactive={props.inactive}>
                {props.children}
            </Button>
        </button>
    )
}
