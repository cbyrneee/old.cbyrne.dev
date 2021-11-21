import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    muted?: boolean;
}

export default function Title({children, muted = true}: TitleProps) {
    return (muted &&
        <h5 className="font-bold text-black/50 text-2xl md:text-3xl mb-2">{children}</h5> ||
        <h2 className={"font-bold text-black text-3xl md:text-4xl mb-4"}>{children}</h2>
    )
}
