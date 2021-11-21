import React from 'react';
import Button from "./Button";
import Link from "next/link";

interface LinkButtonProps {
    children: React.ReactNode;
    inactive?: boolean;
    href: string;
}

export default function LinkButton(props: LinkButtonProps) {
    return <Link href={props.href} passHref={true}>
        <a>
            <Button inactive={props.inactive}>
                {props.children}
            </Button>
        </a>
    </Link>
}
