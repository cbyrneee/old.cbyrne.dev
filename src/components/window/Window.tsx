import React from 'react';
import styles from "../../styles/Window.module.css";
import WindowButton from "./WindowButton";

interface WindowProps {
    children: React.ReactNode,
    noButtons: boolean
}

function Window({children, noButtons = false}: WindowProps) {
    return <>
        <div className={styles.window}>
            {!noButtons && <div className={styles.titlebar}>
                <WindowButton color={"red"}/>
                <WindowButton color={"yellow"}/>
                <WindowButton color={"green"}/>
            </div>}

            {children}
        </div>
    </>;
}

export default Window;
