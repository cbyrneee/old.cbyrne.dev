import React from 'react';

interface BodyProps {
    bold?: boolean;
    bottomPadding?: boolean;

    children: React.ReactNode;
}

export default function Body({bold = false, bottomPadding = false, children}: BodyProps) {
    return <p className={`text-xl md:text-2xl text-black/75 dark:text-white/75 ${bold ? "font-bold" : "font-medium"} ${bottomPadding && "mb-4"}`}>{children}</p>
}
