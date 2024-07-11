import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CoinMarketService } from './coin-market.service';
import { CoinMarketController } from './coin-market.controller';

@Module({
  imports: [HttpModule],
  controllers: [CoinMarketController],
  providers: [CoinMarketService],
})
export class CoinMarketModule {}
