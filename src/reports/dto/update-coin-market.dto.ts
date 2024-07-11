import { PartialType } from '@nestjs/swagger';
import { CreateCoinMarketDto } from './create-coin-market.dto';

export class UpdateCoinMarketDto extends PartialType(CreateCoinMarketDto) {}
