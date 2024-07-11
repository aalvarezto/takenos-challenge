import { Injectable } from '@nestjs/common';
import { ConvertionType } from './cripto-ya/interfaces';
import { CriptoYaService } from './cripto-ya/cripto-ya.service';
import { CoinMarketService } from './coin-market/coin-market.service';
import { CoinMarketListingsRes } from './coin-market/interfaces';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class ReportsService {
  constructor(
    private readonly coinMarketService: CoinMarketService,
    private readonly criptoYaService: CriptoYaService,
  ) {}

  public async testApi() {
    const data = JSON.parse(
      await fs.readFile(path.resolve('foo.json'), 'utf-8'),
    ) as CoinMarketListingsRes;

    return data.data.map((data) => data.name);
  }

  private filterCoinData(coin: ConvertionType) {
    return {
      id: coin.id,
      name: coin.name,
      variation: coin.quote.USD.percent_change_24h,
      valueInPesos: coin.ask,
    };
  }

  public async findTopFive() {
    const { data } = await this.coinMarketService.getTopFive();

    const coins = await this.criptoYaService.addArs(...data);

    return coins.map(this.filterCoinData);
  }

  public async findById(id: string) {
    const { data } = await this.coinMarketService.getById(id);

    const coins = await this.criptoYaService.addArs(...Object.values(data));

    const [coinData] = coins.map(this.filterCoinData);

    return coinData;
  }
}
