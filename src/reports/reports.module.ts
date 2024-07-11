import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { CoinMarketService } from './coin-market.service';

@Module({
  imports: [HttpModule],
  controllers: [ReportsController],
  providers: [ReportsService, CoinMarketService],
})
export class ReportsModule {}
