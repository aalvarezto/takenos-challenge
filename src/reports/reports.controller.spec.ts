import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { CoinMarketService } from './coin-market/coin-market.service';

describe('ReportsController', () => {
  let controller: ReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [CoinMarketService],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
