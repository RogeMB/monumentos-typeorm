/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { MonumentosController } from './monumentos.controller';

describe('MonumentosController', () => {
  let controller: MonumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonumentosController],
    }).compile();

    controller = module.get<MonumentosController>(MonumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
