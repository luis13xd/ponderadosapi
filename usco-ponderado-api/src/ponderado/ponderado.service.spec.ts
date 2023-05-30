import { Test, TestingModule } from '@nestjs/testing';
import { PonderadoService } from './ponderado.service';

describe('PonderadoService', () => {
  let service: PonderadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PonderadoService],
    }).compile();

    service = module.get<PonderadoService>(PonderadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
