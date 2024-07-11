import { Controller, Get, Param } from '@nestjs/common';
import { CoinMarketService } from './coin-market.service';

@Controller('coin-market')
export class CoinMarketController {
  constructor(private readonly coinMarketService: CoinMarketService) {}

  @Get()
  findAll() {
    return this.coinMarketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coinMarketService.findOne();
  }
}
