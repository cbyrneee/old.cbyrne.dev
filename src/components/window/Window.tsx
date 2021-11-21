import React from 'react';
import styles from "../../styles/Window.module.css";
import WindowButton from "./WindowButton";

interface WindowProps {
    children: React.ReactNode,
    removeDecoration?: boolean
}

function Window({children, removeDecoration = false}: WindowProps) {
    return <>
        <div className={`${styles.window} ${!removeDecoration && styles.standardWindow}`}>
            {!removeDecoration && <div className={styles.titlebar}>
                <WindowButton color={"red"}/>
                <WindowButton color={"yellow"}/>
                <WindowButton color={"green"}/>
            </div>}

            {children}
        </div>
    </>;
}

export default Window;
