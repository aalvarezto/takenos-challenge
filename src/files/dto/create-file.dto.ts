import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class FileDto {
  readonly filename: string;

  readonly size: number;
}

export class CreateFileDto {
  @ApiProperty({
    type: 'file',
    format: 'binary',
    // This line is for testing purpouses, change it to "required: true" for better swagger experience.
    required: false,
  })
  @ValidateNested({ each: true })
  @Type(() => FileDto)
  readonly files: FileDto[];
}
