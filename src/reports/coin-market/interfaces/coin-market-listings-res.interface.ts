export interface CoinMarketListingsRes {
  readonly status: Status;
  readonly data: Datum[];
}

export interface Datum {
  readonly id: number;
  readonly name: string;
  readonly symbol: string;
  readonly slug: string;
  readonly num_market_pairs: number;
  readonly date_added: Date;
  readonly tags: string[];
  readonly max_supply: number | null;
  readonly circulating_supply: number;
  readonly total_supply: number;
  readonly infinite_supply: boolean;
  readonly platform: Platform | null;
  readonly cmc_rank: number;
  readonly self_reported_circulating_supply: null;
  readonly self_reported_market_cap: null;
  readonly tvl_ratio: null;
  readonly last_updated: Date;
  readonly quote: Quote;
}

export interface Platform {
  readonly id: number;
  readonly name: string;
  readonly symbol: string;
  readonly slug: string;
  readonly token_address: string;
}

export interface Quote {
  readonly USD: Usd;
}

export interface Usd {
  readonly price: number;
  readonly volume_24h: number;
  readonly volume_change_24h: number;
  readonly percent_change_1h: number;
  readonly percent_change_24h: number;
  readonly percent_change_7d: number;
  readonly percent_change_30d: number;
  readonly percent_change_60d: number;
  readonly percent_change_90d: number;
  readonly market_cap: number;
  readonly market_cap_dominance: number;
  readonly fully_diluted_market_cap: number;
  readonly tvl: null;
  readonly last_updated: Date;
}

export interface Status {
  readonly timestamp: Date;
  readonly error_code: number;
  readonly error_message: null;
  readonly elapsed: number;
  readonly credit_count: number;
  readonly notice: null;
  readonly total_count: number;
}
