import React from "react"
import { Song } from "../lib/Song"
import styles from "../styles/NowPlaying.module.css"

interface NowPlayingProps {
    song: Song
}

export default function NowPlaying(props: NowPlayingProps) {
    return (
        <div className={styles.lastFMContainer}>
            <div className={styles.trackContainer}>
                <img
                    width="80px"
                    height="80px"
                    className={styles.artwork}
                    src={props.song.image}
                ></img>
                <div>
                    <p className={styles.nowplaying}>Now playing</p>
                    <p className={styles.track}>{props.song.name}</p>
                    <p className={styles.artist}>by {props.song.artist}</p>
                </div>
            </div>
        </div>
    )
}
