import { Controller, Get, Param } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get('test-api')
  findAll() {
    return this.coinsService.testApi();
  }

  @Get()
  findTopFive() {
    return this.coinsService.findTopFive();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.coinsService.findById(+id);
  }
}
