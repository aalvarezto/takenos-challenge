import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CoinsService } from './coins.service';
import { CoinsController } from './coins.controller';
import { CoinMarketService } from './coin-market.service';

@Module({
  imports: [HttpModule],
  controllers: [CoinsController],
  providers: [CoinsService, CoinMarketService],
})
export class CoinsModule {}
