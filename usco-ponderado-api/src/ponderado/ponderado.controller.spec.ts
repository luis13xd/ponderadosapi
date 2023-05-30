import { Test, TestingModule } from '@nestjs/testing';
import { PonderadoController } from './ponderado.controller';
import { PonderadoService } from './ponderado.service';

describe('PonderadoController', () => {
  let controller: PonderadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PonderadoController],
      providers: [PonderadoService],
    }).compile();

    controller = module.get<PonderadoController>(PonderadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
