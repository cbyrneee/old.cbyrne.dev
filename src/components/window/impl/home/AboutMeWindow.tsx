import React from 'react';
import Window from "../../Window";
import Title from "../../../typography/Title";
import Body from "../../../typography/Body";

function AboutMeWindow() {
    return (
        <Window>
            <Title>Hey, I{"'"}m</Title>
            <Title muted={false}>Conor Byrne</Title>
            <Body>I am a developer based in Ireland with experience in Kotlin, Java and Typescript.</Body>
        </Window>
    );
}

export default AboutMeWindow;