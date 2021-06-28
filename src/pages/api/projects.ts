import { VercelRequest, VercelResponse } from "@vercel/node"

export default async (request: VercelRequest, response: VercelResponse) => {
    const projectsResponse = await fetch(`${process.env.STRAPI_URL}/projects`)

    if (projectsResponse.ok) {
        return response.status(200).send(await projectsResponse.json())
    } else {
        return response.status(404).send(null)
    }
}
