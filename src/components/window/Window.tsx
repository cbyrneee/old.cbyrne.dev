import React from 'react';
import styles from "../../styles/Window.module.css";
import WindowButton from "./WindowButton";

interface WindowProps {
    children: React.ReactNode
}

function Window(props: WindowProps) {
    return <>
        <div className={styles.window}>
            <div className={styles.titlebar}>
                <WindowButton color={"red"} />
                <WindowButton color={"yellow"} />
                <WindowButton color={"green"} />
            </div>

            {props.children}
        </div>
    </>;
}

export default Window;
