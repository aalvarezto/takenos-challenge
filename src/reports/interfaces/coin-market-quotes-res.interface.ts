import { Status, Datum } from './coin-market-listings-res.interface';

export interface CoinMarketQuotesRes<T extends string> {
  readonly status: Omit<Status, 'total_count'>;
  readonly data: Partial<Record<T, QuotesData>>;
}

export interface QuotesData extends Omit<Datum, 'tags'> {
  readonly is_active: number;
  readonly is_fiat: number;
  readonly tags: Tag;
}

export interface Tag {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
}
