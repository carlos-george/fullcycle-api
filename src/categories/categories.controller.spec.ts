import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategorieService } from './shared/categorie.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategorieEntity } from '../models/categorie.entity';
import { CategorieRepsitoryFake } from './shared/categorie.service.spec';
import { Repository } from 'typeorm';

describe('CategoriesController', () => {
    let controller: CategoriesController;
    let provider: CategorieService;
    let repository: Repository<CategorieEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CategoriesController],
            providers: [
                CategorieService,
                {
                    provide: getRepositoryToken(CategorieEntity),
                    useClass: CategorieRepsitoryFake,
                },
            ]
        }).compile();

        controller = module.get<CategoriesController>(CategoriesController);
        provider = module.get<CategorieService>(CategorieService);
        repository = module.get(getRepositoryToken(CategorieEntity))
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
}); 