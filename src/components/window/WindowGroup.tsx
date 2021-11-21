import React from 'react';

interface WindowGroupProps {
    children: React.ReactNode;
}

function WindowGroup(props: WindowGroupProps) {
    return <div className={"container p-4 md:p-2 2xl:p-0 md:m-auto"}>
        <div className={"grid grid-flow-row gap-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 h-full"}>
            {props.children}
        </div>
    </div>
}

export default WindowGroup;