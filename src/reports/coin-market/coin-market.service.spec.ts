import { Test, TestingModule } from '@nestjs/testing';
import { TestConfigModule } from '../../utils';
import { CoinMarketService } from './coin-market.service';

describe('CoinMarketService', () => {
  let service: CoinMarketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule],
      providers: [CoinMarketService],
    }).compile();

    service = module.get<CoinMarketService>(CoinMarketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
