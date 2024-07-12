import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { CriptoYaService } from './cripto-ya/cripto-ya.service';
import { TestConfigModule } from '../utils';
import { CoinMarketService } from './coin-market/coin-market.service';

describe('ReportsService', () => {
  let service: ReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule],
      providers: [ReportsService, CoinMarketService, CriptoYaService],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
