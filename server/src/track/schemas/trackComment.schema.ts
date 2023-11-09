import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Track } from './track.schema';

export type TrackCommentDocument = HydratedDocument<TrackComment>;

@Schema()
export class TrackComment {
  @Prop()
  track_id: string;

  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Track' },
  })
  track: Track;
}

export const TrackCommentSchema = SchemaFactory.createForClass(TrackComment);
