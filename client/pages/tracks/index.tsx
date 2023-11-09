import Link from "next/link";
import { ITrack } from "../../types/track";
import { TrackList } from "../../components/TrackList";

const tracksMock: ITrack[] = [
    {
        _id: '1111111',
        name: 'track name 1',
        artist: 'track artist 1',
        text: 'track text 1',
        listens: 5,
        picture: 'https://m.media-amazon.com/images/I/91YNiI14lfL._UF1000,1000_QL80_.jpg',
        audio: 'https://file-examples.com/storage/fe9d743740654a8139a48e1/2017/11/file_example_MP3_1MG.mp3',
        comments: [],
        albums: []
    },
    {
        _id: '22222',
        name: 'track name 2',
        artist: 'track artist 2',
        text: 'track text 2',
        listens: 2,
        picture: 'https://m.media-amazon.com/images/I/91YNiI14lfL._UF1000,1000_QL80_.jpg',
        audio: 'https://file-examples.com/storage/fe9d743740654a8139a48e1/2017/11/file_example_MP3_1MG.mp3',
        comments: [],
        albums: []
    },
    {
        _id: '33333',
        name: 'track name 3',
        artist: 'track artist 3',
        text: 'track text 3',
        listens: 3,
        picture: 'https://m.media-amazon.com/images/I/91YNiI14lfL._UF1000,1000_QL80_.jpg',
        audio: 'https://file-examples.com/storage/fe9d743740654a8139a48e1/2017/11/file_example_MP3_1MG.mp3',
        comments: [],
        albums: []
    }
]
export default function Tracks() {
    return (
        <main>
            <>{"tracks"}</>
            <TrackList tracks={tracksMock} />
            <Link href={"tracks/create"}>CREATE NEW TRACK</Link>
        </main>
    )
}