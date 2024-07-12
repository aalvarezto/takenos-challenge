import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  constructor() {}

  upload(file: Express.Multer.File) {
    return;
  }
}
