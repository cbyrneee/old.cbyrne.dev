export interface Project {
    id: number
    name: string
    description: string
    subtitle: string
    github: string
    website: null | string
    published_at: Date
    created_at: Date
    updated_at: Date
    icon: Icon | null
}

export interface Icon {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: null
    provider: string
    provider_metadata: null
    created_at: Date
    updated_at: Date
}

export interface Formats {
    thumbnail: Thumbnail
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null
    url: string
}
