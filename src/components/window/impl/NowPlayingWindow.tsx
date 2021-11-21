import React from 'react';
import Window from "../Window";

interface NowPlayingWindowProps {

}

function NowPlayingWindow(props: NowPlayingWindowProps) {
    return <>
        <Window>
            <h5 className={"text-3xl font-bold text-black/50"}>Now Playing</h5>

            <div className={"flex mt-4 gap-3"}>
                <img
                    className={"w-20 h-20 md:w-24 md:h-24 rounded-md md:rounded-lg"}
                    src={"https://i.scdn.co/image/ab67616d0000b273fdd84651effb8ffe71b098e9"}
                    alt={"album art"}
                />

                <div>
                    <h1 className={"text-2xl font-bold text-black mt-2 md:mt-4"}>Void</h1>
                    <h2 className={"text-2xl font-medium text-black/75"}>Volumes</h2>
                </div>
            </div>
        </Window>
    </>;
}

export default NowPlayingWindow;