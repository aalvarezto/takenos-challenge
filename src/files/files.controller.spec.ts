import { Test, TestingModule } from '@nestjs/testing';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TestConfigModule } from '../utils';

describe('FilesController', () => {
  let controller: FilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule],
      controllers: [FilesController],
      providers: [FilesService],
    }).compile();

    controller = module.get<FilesController>(FilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
