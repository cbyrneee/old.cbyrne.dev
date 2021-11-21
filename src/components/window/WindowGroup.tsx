import React from 'react';

interface WindowGroupProps {
    children: React.ReactNode;
}

function WindowGroup(props: WindowGroupProps) {
    return <>
        <div className={"container p-4 md:p-0 md:m-auto"}>
            <div className={"grid grid-flow-row auto-rows-max gap-4"}>
                {props.children}
            </div>
        </div>
    </>
}

export default WindowGroup;