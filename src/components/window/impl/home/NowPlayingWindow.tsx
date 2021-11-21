import React from "react";
import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";
import TrackData from "../../../../lib/TrackData.interface";
import Image from "next/image";
import Window from "../../Window";
import Title from "../../../typography/Title";
import Body from "../../../typography/Body";

interface NowPlayingWindowProps {
    cache?: TrackData;
}

function NowPlayingWindow(props: NowPlayingWindowProps) {
    const {data, error} = useSWR<TrackData>("/api/track", fetcher, {
        refreshInterval: 5000,
        fallbackData: props.cache,
    });

    return <>
        {
            error && <></> ||
            data && <Window>
                <Title>Now Playing</Title>
                <div className={"flex flex-row items-center content-center mt-4 gap-3 md:gap-4"}>
                    <div className={"w-1/4 sm:w-1/6 md:w-1/3 lg:w-1/4 xl:w-24"}>
                        <Image
                            className={"rounded-lg sm:rounded-lg md:rounded-md lg:rounded-xl"}
                            src={data.image}
                            alt={""}
                            width="300"
                            height="300"
                            priority={true}
                        />
                    </div>

                    <div className={"w-3/4 md:w-5/6 mr-5"}>
                        <Body bold>{data.name}</Body>
                        <Body>{data.artist}</Body>
                    </div>
                </div>
            </Window>
        }

    </>;
}

export default NowPlayingWindow;