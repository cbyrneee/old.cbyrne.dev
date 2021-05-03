import React from "react";

export default function Header() {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 p-8">
            <div className="flex space-x-4">
                <img
                    alt=""
                    className="w-20 h-20 md:w-16 md:h-16 rounded-md"
                    src="/img/profile.webp"
                ></img>
                <div className="grid">
                    <h1 className="title">Hey, I'm Conor</h1>
                    <h3 className="subtitle">
                        I'm a developer and student from Ireland
                    </h3>
                </div>
            </div>
        </div>
    );
}
