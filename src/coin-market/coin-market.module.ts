import { Module } from '@nestjs/common';
import { CoinMarketService } from './coin-market.service';
import { CoinMarketController } from './coin-market.controller';

@Module({
  controllers: [CoinMarketController],
  providers: [CoinMarketService],
})
export class CoinMarketModule {}
