import { IsNumberString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoinByIdParamDto {
  @IsNumberString()
  @Length(1, 20)
  @ApiProperty({
    example: '1',
    description: 'This ID should match with the coin ID of coin market cap',
  })
  readonly id: string = '';
}
