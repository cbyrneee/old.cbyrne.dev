export interface LastFMResponse {
    recenttracks: Recenttracks
}

export interface Recenttracks {
    "@attr": RecenttracksAttr
    track: Track[]
}

export interface RecenttracksAttr {
    page: string
    perPage: string
    user: string
    total: string
    totalPages: string
}

export interface Track {
    artist: Album
    "@attr"?: TrackAttr
    mbid: string
    album: Album
    streamable: string
    url: string
    name: string
    image: Image[]
    date?: DateClass
}

export interface TrackAttr {
    nowplaying: string
}

export interface Album {
    mbid: string
    "#text": string
}

export interface DateClass {
    uts: string
    "#text": string
}

export interface Image {
    size: Size
    "#text": string
}

export enum Size {
    Extralarge = "extralarge",
    Large = "large",
    Medium = "medium",
    Small = "small",
}
