import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { CriptoYaService } from './cripto-ya/cripto-ya.service';
import { CoinMarketService } from './coin-market/coin-market.service';

@Module({
  imports: [HttpModule],
  controllers: [ReportsController],
  providers: [ReportsService, CoinMarketService, CriptoYaService],
})
export class ReportsModule {}
