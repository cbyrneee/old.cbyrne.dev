import React from 'react';
import Button from "./Button";
import Link from "next/link";

interface LinkButtonProps {
    children: React.ReactNode;
    inactive?: boolean;
    href: string;
    dontOpenNewTab?: boolean
}

export default function LinkButton(
    {children, inactive = false, href, dontOpenNewTab = false}: LinkButtonProps
) {
    return <>
        <Link href={href} passHref={true}>
            <a target={dontOpenNewTab ? "_self" : "_blank"} referrerPolicy={"no-referrer"}>
                <Button inactive={inactive}>
                    {children}
                </Button>
            </a>
        </Link>
    </>
}
