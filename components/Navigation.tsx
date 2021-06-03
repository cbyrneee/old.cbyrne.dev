import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
    const router = useRouter();
    const isHome = router.asPath == "/";

    return (
        <div className="bg-gray-200 dark:bg-gray-900 mx-auto py-2 pb-8 text-white">
            <div className="flex flex-flow-col gap-8 self-center">
                <p className="font-semibold">Conor Byrne</p>
                <Link href="/">
                    <a className={isHome ? "selected-link" : "unselected-link"}>
                        Home
                    </a>
                </Link>
                <Link href="/">
                    <a
                        className={
                            (isHome ? "unselected-link" : "selected-link") +
                            " opacity-50"
                        }
                    >
                        Downloads
                    </a>
                </Link>
            </div>
        </div>
    );
}
