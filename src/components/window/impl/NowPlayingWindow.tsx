import React from "react";
import Window from "../Window";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";
import TrackData from "../../../lib/TrackData.interface";
import Image from "next/image";

interface NowPlayingWindowProps {
    cache: TrackData | undefined;
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
                <h5 className={"text-3xl font-bold text-black/50"}>Now Playing</h5>
                <div className={"flex flex-row items-center content-center mt-4 gap-3 md:gap-4"}>
                    <div className={"w-1/4 sm:w-1/6 md:w-1/3 lg:w-1/4 xl:w-1/6"}>
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
                        <h1 className={"text-2xl font-bold text-black line-clamp-1 -mt-1 md:mt-0"}>{data.name}</h1>
                        <h2 className={"text-2xl font-medium text-black/75 line-clamp-1"}>{data.artist}</h2>
                    </div>
                </div>
            </Window>
        }

    </>;
}

export default NowPlayingWindow;