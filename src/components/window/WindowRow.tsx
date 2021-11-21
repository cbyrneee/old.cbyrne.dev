import React from 'react';

interface WindowRowProps {
    children: React.ReactNode;
}

function WindowRow(props: WindowRowProps) {
    return <>
        <div className={"grid grid-flow-row gap-4 md:grid-flow-col"}>
            {props.children}
        </div>
    </>
}

export default WindowRow;