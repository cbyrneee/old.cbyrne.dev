import React from 'react';
import Button from "./Button";
import Link from "next/link";
import styles from "../../styles/Button.module.css";

interface TooltipLinkButtonProps {
    href: string;
    tooltip: string;
    inactive?: boolean;
    dontOpenNewTab?: boolean

    children: React.ReactNode;
}

export default function TooltipLinkButton(
    {href, tooltip, dontOpenNewTab = false, inactive = false, children}: TooltipLinkButtonProps
) {
    return <Link href={href} passHref={true}>
        <div
            className={`${tooltip && `${styles.hasTooltip} group flex flex-col items-center`}`}
        >
            {tooltip &&
            <span className={`${styles.tooltip} group-hover:md:opacity-100 cursor-default`}>{tooltip}</span>
            }

            <a
                className={"cursor-pointer"}
                style={{pointerEvents: (inactive && tooltip) ? "auto" : "none"}}
                target={dontOpenNewTab ? "_self" : "_blank"}
                referrerPolicy={"no-referrer"}
            >
                <Button inactive={inactive}>
                    {children}
                </Button>
            </a>
        </div>
    </Link>
}
