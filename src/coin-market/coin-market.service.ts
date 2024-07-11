import { ConfigType } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCoinMarketDto } from './dto/create-coin-market.dto';
import { UpdateCoinMarketDto } from './dto/update-coin-market.dto';
import configuration from '../config/configuration';

@Injectable()
export class CoinMarketService {
  constructor(
    @Inject(configuration.KEY)
    private config: ConfigType<typeof configuration>,
  ) {}

  findAll() {
    return `This action returns all coinMarket`;
  }

  findOne() {
    return this.config.port;
  }
}
