import React from "react"
import styles from "../styles/Button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface ButtonProps {
    name: string
    destination: string
    icon: IconProp
}

export default function Button(props: ButtonProps) {
    return (
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon className={styles.icon} icon={props.icon} />
            <a target="_blank" href={props.destination}>
                {props.name}
            </a>
        </div>
    )
}
