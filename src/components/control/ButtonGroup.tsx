import React from 'react';

interface ButtonGroupProps {
    children: React.ReactNode;
}

function ButtonGroup(props: ButtonGroupProps) {
    return <>
        <div className={"flex flex-row gap-4"}>
            {props.children}
        </div>
    </>
}

export default ButtonGroup;