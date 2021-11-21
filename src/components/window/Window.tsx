import React from 'react';
import styles from "../../styles/Window.module.css";
import WindowButton from "./WindowButton";

interface WindowProps {
    children: React.ReactNode,
    removeDecoration?: boolean

    onlyClose?: boolean
    onClose?: () => void
}

function Window({children, onClose, removeDecoration = false, onlyClose = false}: WindowProps) {
    return <>
        <div className={styles.window}>
            {!removeDecoration && <div className={styles.titlebar}>
                <WindowButton color={"red"} onClick={onClose}/>
                {!onlyClose && (<>
                    <WindowButton color={"yellow"}/>
                    <WindowButton color={"green"}/>
                </>)
                }
            </div>}

            {children}
        </div>
    </>;
}

export default Window;
