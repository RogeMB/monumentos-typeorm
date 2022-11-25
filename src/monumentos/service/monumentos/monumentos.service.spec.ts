import { Test, TestingModule } from '@nestjs/testing';
import { MonumentosService } from './monumentos.service';

describe('MonumentosService', () => {
  let service: MonumentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonumentosService],
    }).compile();

    service = module.get<MonumentosService>(MonumentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
