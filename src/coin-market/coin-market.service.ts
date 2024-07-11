import { map } from 'rxjs';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCoinMarketDto } from './dto/create-coin-market.dto';
import { UpdateCoinMarketDto } from './dto/update-coin-market.dto';
import { CoinMarketListingsRes } from './interfaces';
import configuration from '../config/configuration';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class CoinMarketService {
  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
    private readonly httpService: HttpService,
  ) {}

  public async testApi() {
    const data = JSON.parse(
      await fs.readFile(path.resolve('foo.json'), 'utf-8'),
    ) as CoinMarketListingsRes;

    return data.data.map((data) => data.name);
  }

  public findTopFive() {
    return this.httpService
      .get<CoinMarketListingsRes>(this.config.service.coinMarket.listings, {
        baseURL: this.config.service.coinMarket.baseUrl,
        headers: {
          Accept: 'application/json',
          'X-CMC_PRO_API_KEY': this.config.service.coinMarket.key,
        },
        params: {
          start: 1,
          limit: 5,
          convert: 'USD',
        },
      })
      .pipe(map((data) => data.data));
  }

  public async findById(id: number) {
    return id;
  }
}
