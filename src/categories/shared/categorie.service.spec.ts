import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CategorieService } from './categorie.service';
import { CategorieEntity } from '../../models/categorie.entity';

export class CategorieRepsitoryFake {
    public async find(): Promise<void> { }
    public async save(): Promise<void> { }
}

describe('CategorieService', () => {
    let provider: CategorieService;
    let repository: Repository<CategorieEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CategorieService,
                {
                    provide: getRepositoryToken(CategorieEntity),
                    useClass: CategorieRepsitoryFake,
                },
            ],
        }).compile();

        provider = module.get<CategorieService>(CategorieService);
        repository = module.get(getRepositoryToken(CategorieEntity))
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });

});