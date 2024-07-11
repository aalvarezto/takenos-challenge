import { AxiosError } from 'axios';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CoinMarketListingsRes, CoinMarketQuotesRes } from './interfaces';
import configuration from '../config/configuration';

@Injectable()
export class CoinMarketService {
  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
    private readonly httpService: HttpService,
  ) {}

  public getTopFive() {
    const observable = this.httpService
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
      .pipe(
        map((data) => data.data),
        catchError((e: AxiosError) => {
          console.log(e);
          if (!e?.response.status) {
            throw new HttpException('Internal Error', 500);
          }

          throw new HttpException(e.message, e.response.status);
        }),
      );

    return firstValueFrom(observable);
  }

  public getById(id: string) {
    const observable = this.httpService
      .get<CoinMarketQuotesRes<typeof id>>(
        this.config.service.coinMarket.quotes,
        {
          baseURL: this.config.service.coinMarket.baseUrl,
          headers: {
            Accept: 'application/json',
            'X-CMC_PRO_API_KEY': this.config.service.coinMarket.key,
          },
          params: {
            id,
          },
        },
      )
      .pipe(
        map((data) => data.data),
        catchError((e: AxiosError) => {
          if (!e?.response.status) {
            throw new HttpException('Internal Error', 500);
          }

          throw new HttpException(e.message, e.response.status);
        }),
      );

    return firstValueFrom(observable);
  }
}
