import React from 'react';
import styles from "../../styles/Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    inactive?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <div className={`${styles.button} ${props.inactive ? styles.inactiveButton : ""}`}>
            {props.children}
        </div>
    )
}
