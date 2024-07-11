import { Injectable } from '@nestjs/common';
import { CoinMarketService } from './coin-market/coin-market.service';
import {
  CoinMarketListingsRes,
  Datum,
  QuotesData,
} from './coin-market/interfaces';
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

  private processCoin(coin: Datum & QuotesData) {
    return {
      id: coin.id,
      name: coin.name,
      variation: coin.quote.USD.percent_change_24h,
    };
  }

  public async findTopFive() {
    const { data: coins } = await this.coinMarketService.getTopFive();

    return coins.map(this.processCoin);
  }

  public async findById(id: string) {
    const { data } = await this.coinMarketService.getById(id);

    const [coinData] = Object.values(data).map(this.processCoin);

    return coinData;
  }
}
