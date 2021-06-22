import React from 'react'
import styles from '../styles/Button.module.css'

interface ButtonProps {
    name: string;
    destination: string;
}

export default function Button(props: ButtonProps) {
    return (
        <div className={styles.buttonContainer}>
            <a href={props.destination}>{props.name}</a>
        </div>
    )
}
