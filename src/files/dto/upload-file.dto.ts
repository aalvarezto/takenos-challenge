import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Readable } from 'stream';

class FileDto implements Express.Multer.File {
  readonly buffer: Buffer;
  readonly destination: string;
  readonly fieldname: string;
  readonly filename: string;
  readonly mimetype: string;
  readonly originalname: string;
  readonly path: string;
  readonly size: number;
  readonly stream: Readable;
  readonly encoding: string;
}

export class UploadFileDto {
  @ApiProperty({
    type: 'file',
    format: 'binary',
    // This line is for testing purpouses, change it to "required: true" for better swagger experience.
    required: false,
  })
  @ValidateNested({ each: true })
  @Type(() => FileDto)
  readonly files: Express.Multer.File[];
}
