export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[];
    albums: IAlbum[]
}

export interface IComment {
    _id: string;
    track_id: string;
    username: string;
    text: string;
}

export interface IAlbum {
    _id: string;
    track_id: string;
    username: string;
    text: string;
}