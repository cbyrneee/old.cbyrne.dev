import { VercelRequest, VercelResponse } from "@vercel/node"

export default async (request: VercelRequest, response: VercelResponse) => {
    const {
        query: { hash },
    } = request

    const res = await fetch(`${process.env.STRAPI_URL}/uploads/${hash}.png`)

    if (res.ok) {
        return response.status(200).send(res.body)
    } else {
        return response.status(404).send(null)
    }
}
