import React from 'react';
import styles from "../../styles/Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    return <div className={styles.button}>{props.children}</div>
}