import { Test, TestingModule } from '@nestjs/testing';
import { CriptoYaService } from './cripto-ya.service';
import { TestConfigModule } from '../../utils';

describe('CriptoYaService', () => {
  let service: CriptoYaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule],
      providers: [CriptoYaService],
    }).compile();

    service = module.get<CriptoYaService>(CriptoYaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
