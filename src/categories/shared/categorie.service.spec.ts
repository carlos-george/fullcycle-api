import { Test, TestingModule } from '@nestjs/testing';
import { CategorieService } from './categorie.service';

describe('CategorieService', () => {
  let provider: CategorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorieService],
    }).compile();

    provider = module.get<CategorieService>(CategorieService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
