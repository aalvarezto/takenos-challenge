import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { CriptoYaService } from './cripto-ya/cripto-ya.service';
import { TestConfigModule } from '../utils';
import { ReportsController } from './reports.controller';
import { CoinMarketService } from './coin-market/coin-market.service';

describe('ReportsController', () => {
  let controller: ReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule],
      controllers: [ReportsController],
      providers: [ReportsService, CoinMarketService, CriptoYaService],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
