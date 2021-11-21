import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LAST_FM_USER}&api_key=${process.env.LAST_FM_KEY}&format=json`)
    if (!response.ok)
        return res.status(response.status).json({message: "Error: Received non OK code from Last.FM!"})

    const json = await response.json()
    const currentTrack = json["recenttracks"]["track"][0]
    if (!currentTrack || !currentTrack["@attr"]["nowplaying"])
        return res.status(204).json({message: "Error: Received no track from Last.FM"})

    const data = {
        name: currentTrack["name"],
        artist: currentTrack["artist"]["#text"],
        image: currentTrack["image"][3]["#text"]
    }

    res.status(200).json(data)
}
