import TrackData from "./TrackData.interface"

export default async function getTrack() {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USER}&api_key=${process.env.LAST_FM_KEY}&format=json`)
    if (!response.ok) return null

    const json = await response.json()
    const currentTrack = json["recenttracks"]["track"][0]
    if (!currentTrack || !currentTrack["@attr"] || !currentTrack["@attr"]["nowplaying"])
        return null

    const track: TrackData = {
        name: currentTrack["name"],
        artist: currentTrack["artist"]["#text"],
        image: currentTrack["image"][3]["#text"]
    }

    return track
}