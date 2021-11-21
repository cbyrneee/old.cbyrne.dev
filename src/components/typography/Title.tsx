import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    muted?: boolean;
    bottomPadding?: boolean;
}

export default function Title({children, muted = true, bottomPadding=true}: TitleProps) {
    return (muted &&
        <h5 className={`font-bold text-black/50 dark:text-white/80 text-2xl md:text-3xl ${bottomPadding && "mb-2"}`}>{children}</h5> ||
        <h2 className={`font-bold text-black dark:text-white text-3xl md:text-4xl ${bottomPadding && "mb-4"}`}>{children}</h2>
    )
}
