import type {NextApiRequest, NextApiResponse} from 'next'
import getTrack from "../../lib/getTrack";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const track = await getTrack()
    if (!track) return res.status(204).end()

    res.status(200).json(track)
}
