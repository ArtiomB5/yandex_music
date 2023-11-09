import { FC, HTMLAttributes } from "react"
import { ITrack } from "../types/track"
import Image from 'next/image'
interface ITrackItem extends HTMLAttributes<HTMLDivElement> {
    isListeningActive?: boolean
    track: ITrack
}

export const TrackItem: FC<ITrackItem> = (props) => {
    const {
        isListeningActive,
        track,
        ...restProps
    } = props;
    const { picture, artist, name } = track;
    return <div {...restProps}>
        {isListeningActive && <button>Pause</button>}
        {!isListeningActive && <button>Play</button>}
        <Image
            src={picture}
            alt={`${artist} - ${name}`}
            height={500}
            width={500}
        />
        <button>Delete</button>
    </div>
}