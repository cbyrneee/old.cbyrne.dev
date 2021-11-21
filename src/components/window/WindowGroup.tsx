import React from 'react';

interface WindowGroupProps {
    children: React.ReactNode;
}

function WindowGroup(props: WindowGroupProps) {
    return <>
        <div className={"flex flex-col gap-4"}>
            {props.children}
        </div>
    </>
}

export default WindowGroup;