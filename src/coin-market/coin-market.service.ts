import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCoinMarketDto } from './dto/create-coin-market.dto';
import { UpdateCoinMarketDto } from './dto/update-coin-market.dto';
import configuration from '../config/configuration';
import { map } from 'rxjs';

@Injectable()
export class CoinMarketService {
  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
    private readonly httpService: HttpService,
  ) {}

  findAll() {
    return `This action returns all coinMarket`;
  }

  findOne() {
    return this.httpService
      .get('http://localhost:4000/api/credentials')
      .pipe(map((data) => data.data));
  }
}
