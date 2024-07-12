import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';

@ApiTags('Files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'File upload' })
  @UseInterceptors(
    FilesInterceptor('files', 1, {
      limits: {
        files: 1,
        fileSize: 5 * 1024 * 1024,
      },
      fileFilter: (_, file, cb) => {
        const fileName = file.originalname.toLowerCase();

        const isValidFormat =
          fileName.endsWith('.pdf') ||
          fileName.endsWith('.png') ||
          fileName.endsWith('.jpg');

        if (!isValidFormat) {
          return cb(new HttpException('Invalid file format', 401), false);
        }

        return cb(null, true);
      },
    }),
  )
  create(
    @Body() _: CreateFileDto,
    @UploadedFiles() files: CreateFileDto['files'],
  ) {
    console.log(files);
    return;
  }
}
