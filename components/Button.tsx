import React from "react";

interface ButtonProps {
    text: string;
    destination: string;
}

export default function Button(props: ButtonProps) {
    return (
        <a className="button" href={props.destination}>
            {props.text}
        </a>
    );
}
