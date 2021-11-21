import React from "react";

interface WindowButtonProps {
    color: string;
}

function WindowButton(props: WindowButtonProps) {
    return <div className={`bg-${props.color}-500 hover:bg-${props.color}-500/50 transition-colors rounded-xl w-5 h-5`}/>
}

export default WindowButton;