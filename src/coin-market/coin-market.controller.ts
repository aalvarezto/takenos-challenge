import { Controller, Get, Param } from '@nestjs/common';
import { CoinMarketService } from './coin-market.service';

@Controller('coin-market')
export class CoinMarketController {
  constructor(private readonly coinMarketService: CoinMarketService) {}

  @Get('test-api')
  findAll() {
    return this.coinMarketService.testApi();
  }

  @Get()
  findTopFive() {
    return this.coinMarketService.findTopFive();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.coinMarketService.findById(+id);
  }
}
