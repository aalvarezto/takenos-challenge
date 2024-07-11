import { Injectable } from '@nestjs/common';
import { CoinMarketService } from './coin-market.service';
import { CoinMarketListingsRes } from './interfaces';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class ReportsService {
  constructor(private readonly coinMarketService: CoinMarketService) {}

  public async testApi() {
    const data = JSON.parse(
      await fs.readFile(path.resolve('foo.json'), 'utf-8'),
    ) as CoinMarketListingsRes;

    return data.data.map((data) => data.name);
  }

  public async findTopFive() {
    const { data: coins } = await this.coinMarketService.getTopFive();

    return coins.map((coin) => ({
      name: coin.name,
      variation: coin.quote.USD.percent_change_24h,
    }));
  }

  public async findById(id: string) {
    return this.coinMarketService.getById(id);
  }
}
