import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Album } from 'src/album/schemas/album.schema';
import { TrackComment } from './trackComment.schema';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  text: string;

  @Prop()
  listens: number;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TrackComment' }],
  })
  comments: TrackComment[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
  })
  albums: Album[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
