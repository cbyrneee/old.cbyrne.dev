import React from "react"
import styles from "../styles/Button.module.css"

interface ButtonProps {
    name: string
    destination: string
    icon: JSX.Element
}

export default function Button(props: ButtonProps) {
    return (
        <a
            className={styles.buttonContainer}
            target="_blank"
            rel="noreferrer"
            href={props.destination}
        >
            {props.icon}
            {props.name}
        </a>
    )
}
