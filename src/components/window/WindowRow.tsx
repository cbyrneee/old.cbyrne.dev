import React from 'react';

interface WindowRowProps {
    children: React.ReactNode;
}

function WindowRow(props: WindowRowProps) {
    return <>
        <div className={"grid gap-4 md:grid-cols-2"}>
            {props.children}
        </div>
    </>
}

export default WindowRow;