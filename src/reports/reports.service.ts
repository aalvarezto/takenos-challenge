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

  public findTopFive() {
    return this.coinMarketService.getTopFive();
  }

  public async findById(id: number) {
    return this.coinMarketService.getById(id);
  }
}
