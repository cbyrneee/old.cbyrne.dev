import React from "react";

interface WindowButtonProps {
    color: string;
    onClick?: () => void;
}

function WindowButton(props: WindowButtonProps) {
    return <button
        onClick={props.onClick}
        className={`bg-${props.color}-500 hover:bg-${props.color}-500/50 transition-colors duration-75 rounded-xl w-5 h-5`}
    />
}

export default WindowButton;