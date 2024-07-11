import { Test, TestingModule } from '@nestjs/testing';
import { CoinMarketController } from './coin-market.controller';
import { CoinMarketService } from './coin-market.service';

describe('CoinMarketController', () => {
  let controller: CoinMarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoinMarketController],
      providers: [CoinMarketService],
    }).compile();

    controller = module.get<CoinMarketController>(CoinMarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
