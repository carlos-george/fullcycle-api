import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieEntity } from '../../models/categorie.entity';
import { Repository } from 'typeorm';
import { CategorieDTO } from './categorie.dto';

@Injectable()
export class CategorieService {

    constructor(
        @InjectRepository(CategorieEntity)
        private categorieRepo: Repository<CategorieEntity>
    ) { }

    getAll() {
        return this.categorieRepo.find();
    }

    create(categorie: CategorieDTO) {

        let cat: CategorieEntity = new CategorieEntity();

        cat.description = categorie.description;
        if (categorie.id) {
            cat.id = categorie.id;
        }

        return this.categorieRepo.save(cat);
    }
}
