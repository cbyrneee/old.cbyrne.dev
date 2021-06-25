import { LastFMResponse } from "./../../lib/LastFMResponse"
import { VercelRequest, VercelResponse } from "@vercel/node"

export default async (request: VercelRequest, response: VercelResponse) => {
    const lastFMResponse = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USER}&api_key=${process.env.LAST_FM_KEY}&format=json`
    )

    if (lastFMResponse.ok) {
        const json: LastFMResponse = await lastFMResponse.json()
        const track = json.recenttracks.track?.[0]

        if (!track || !track["@attr"]?.nowplaying) {
            response.status(200).send(null)
        } else {
            const image =
                track.image.find((it) => it.size === "large")?.["#text"] ??
                track.image[0]["#text"]

            response.status(200).send({
                name: track.name,
                artist: track.artist["#text"],
                image: image,
            })
        }
    } else {
        response.status(400).send({ message: "Failed to get LastFM data" })
    }
}
