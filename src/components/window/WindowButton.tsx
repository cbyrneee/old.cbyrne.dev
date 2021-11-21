import React from "react";
import useSound from "use-sound";

interface WindowButtonProps {
    color: string;
}

function WindowButton(props: WindowButtonProps) {
    const [play] = useSound("/vine.mp3");
    return <button onClick={() => {
        play()
    }} className={`bg-${props.color}-500 hover:bg-${props.color}-500/50 transition-colors rounded-xl w-5 h-5`}/>
}

export default WindowButton;