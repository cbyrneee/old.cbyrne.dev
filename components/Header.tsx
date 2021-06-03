import React from "react";
import Navigation from "./Navigation";

interface Props {
    title: string;
    subtitle: string;
}

export default function Header(props: Props) {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 px-8 pt-4 pb-8">
            <Navigation />
            <div className="flex space-x-4">
                <div className="grid">
                    <h1 className="title">{props.title}</h1>
                    <h3 className="subtitle">{props.subtitle}</h3>
                </div>
            </div>
        </div>
    );
}
