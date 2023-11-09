import { FC, HTMLAttributes } from "react"
import { ITrack } from "../types/track"
import { TrackItem } from "./TrackItem"

interface ITrackList extends HTMLAttributes<HTMLDivElement> {
    tracks: ITrack[]
}

export const TrackList: FC<ITrackList> = ({ tracks, ...props }) => {
    return <div>
        {tracks.map((track: ITrack) => {
            return <div key={track._id} {...props}>
                <TrackItem track={track}/>
            </div>
        })}
    </div>
}