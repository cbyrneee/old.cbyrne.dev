import React from 'react';
import Window from "../../Window";

function AboutMeWindow() {
    return (
        <Window>
            <h5 className={"text-3xl font-bold text-black/50"}>Hey, I{"'"}m</h5>
            <h1 className={"text-4xl font-bold mt-2 mb-2"}>Conor Byrne</h1>

            <h2 className={"text-2xl font-medium text-black/75"}>I am a developer based in Ireland with
                experience in Kotlin, Java and Typescript.</h2>
        </Window>
    );
}

export default AboutMeWindow;