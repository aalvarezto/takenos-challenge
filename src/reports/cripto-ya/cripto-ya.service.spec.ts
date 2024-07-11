import { Test, TestingModule } from '@nestjs/testing';
import { CriptoYaService } from './cripto-ya.service';

describe('CriptoYaService', () => {
  let service: CriptoYaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriptoYaService],
    }).compile();

    service = module.get<CriptoYaService>(CriptoYaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
