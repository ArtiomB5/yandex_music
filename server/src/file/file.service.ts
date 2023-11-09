import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

const checkDirectory = async (path: string): Promise<boolean> => {
  let isExist = false;
  fs.access(path, fs.constants.F_OK, (err) => {
    if (!err) {
      isExist = true;
    }
  });
  return isExist;
};

@Injectable()
export class FileService {
  async createFile(type: FileType, file: Express.Multer.File) {
    try {
      const fileExtension = file.originalname.split('.').pop();
      const fileName = `${uuid.v4()}.${fileExtension}`;
      const filePath = path.resolve(__dirname, '..', 'static', type);
      const isExist = await checkDirectory(filePath);
      if (!isExist) {
        fs.mkdir(filePath, { recursive: true }, (err) => {
          if (err) {
            console.log('Access Error:');
            throw err;
          }
        });
      }
      fs.writeFile(path.resolve(filePath, fileName), file.buffer, (err) => {
        if (err) {
          console.log('WriteFile Error:');
          throw err;
        }
      });
      return `${type}/${fileName}`;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {
    return fileName;
  }
}
