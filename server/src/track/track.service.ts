import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, ObjectId } from 'mongoose';
import {
  TrackComment,
  TrackCommentDocument,
} from './schemas/trackComment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateTrackCommentDto } from './dto/create-trackComment.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class TrackService {
  constructor(
    private fileService: FileService,
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(TrackComment.name)
    private commentModel: Model<TrackCommentDocument>,
  ) {}

  async create(
    createTrackDto: CreateTrackDto,
    picture: Express.Multer.File,
    audio: Express.Multer.File,
  ): Promise<Track> {
    const audioFileName = await this.fileService.createFile(
      FileType.AUDIO,
      audio,
    );
    const pictureFileName = await this.fileService.createFile(
      FileType.IMAGE,
      picture,
    );
    return await this.trackModel.create({
      ...createTrackDto,
      audio: audioFileName,
      picture: pictureFileName,
      listens: 0,
    });
  }

  async getAll(count = 10, offset = 0): Promise<Track[]> {
    return await this.trackModel.find().skip(offset).limit(count);
  }

  async getOne(id: ObjectId): Promise<Track> {
    return await this.trackModel.findById(id).populate('comments');
  }

  async delete(id: ObjectId): Promise<Track> {
    return await this.trackModel.findByIdAndDelete(id);
  }

  async addTrackComment(
    createTrackCommentDto: CreateTrackCommentDto,
  ): Promise<TrackComment> {
    const track = await this.trackModel.findById(createTrackCommentDto.trackId);
    const comment = await this.commentModel.create({
      ...createTrackCommentDto,
    });
    track.comments.push(comment);
    await track.save();
    return comment;
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);

    if (track) {
      track.listens = track.listens + 1;
      track.save();
    }

    return track;
  }

  async search(query: string): Promise<Track[]> {
    if (Boolean(String(query).trim())) {
      return await this.trackModel.find({
        $or: [
          { name: { $regex: new RegExp(query, 'i') } },
          {
            albums: {
              $elemMatch: { name: { $regex: new RegExp(query, 'i') } },
            },
          },
          { artist: { $regex: new RegExp(query, 'i') } },
        ],
      });
    }
    return [];
  }
}
