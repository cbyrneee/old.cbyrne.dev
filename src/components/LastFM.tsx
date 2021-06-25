import React from "react"
import { Song } from "../lib/Song"
import styles from "../styles/LastFM.module.css"

interface LastFMProps {
    song: Song
}

export default function LastFM(props: LastFMProps) {
    return (
        <div className={styles.lastFMContainer}>
            <div className={styles.trackContainer}>
                <img className={styles.artwork} src={props.song.image}></img>
                <div>
                    <p className={styles.nowplaying}>Now playing</p>
                    <p className={styles.track}>{props.song.name}</p>
                    <p className={styles.artist}>{props.song.artist}</p>
                </div>
            </div>
        </div>
    )
}
