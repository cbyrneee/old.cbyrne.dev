import React from 'react';
import styles from "../../styles/Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    inactive?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <div
            className={`${styles.button} ${props.inactive ? `${styles.inactiveButton} dark:bg-accent/50 dark:text-white/50 dark:hover:bg-accent/100 dark:hover:text-white/90` : ""} hover:bg-background/50 text-accent bg-background dark:bg-accent dark:hover:bg-accent/50 dark:text-white/90 dark:hover:text-white/40`}>
            {props.children}
        </div>
    )
}
