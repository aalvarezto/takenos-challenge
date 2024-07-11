import { AxiosError } from 'axios';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CriptoYaRes } from './interfaces';
import { Datum, QuotesData } from '../coin-market/interfaces';
import configuration from '../../config/configuration';

const emptyConvertion: CriptoYaRes = {
  ask: null,
  totalAsk: null,
  bid: null,
  totalBid: null,
  time: null,
};

@Injectable()
export class CriptoYaService {
  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
    private readonly httpService: HttpService,
  ) {}

  private addArsToOne = (coin: Datum | QuotesData) => {
    const observable = this.httpService
      .get<CriptoYaRes | string>(
        `/api/${this.config.service.criptoYa.exchange}/${coin.symbol}/ars/1`,
        {
          baseURL: this.config.service.criptoYa.baseUrl,
        },
      )
      .pipe(
        map((data) =>
          typeof data.data === 'string' ? emptyConvertion : data.data,
        ),
        map((data) => ({ ...data, ...coin })),
        catchError((e: AxiosError) => {
          console.log(e);
          if (!e?.response.status) {
            throw new HttpException('Internal Error', 500);
          }

          throw new HttpException(e.message, e.response.status);
        }),
      );

    return firstValueFrom(observable);
  };

  public addArs(...coins: (Datum | QuotesData)[]) {
    return Promise.all(coins.map(this.addArsToOne));
  }
}
