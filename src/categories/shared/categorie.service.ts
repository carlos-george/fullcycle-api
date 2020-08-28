import { Injectable } from '@nestjs/common';
import { Categorie } from './categorie';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieEntity } from '../../models/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {

    constructor(
        @InjectRepository(CategorieEntity)
        private categorieRepo: Repository<CategorieEntity>
    ) { }

    getAll() {
        return this.categorieRepo.find();
    }

    create(categorie: Categorie) {

        let cat: CategorieEntity = new CategorieEntity();

        cat.description = categorie.description;
        if (categorie.id) {
            cat.id = categorie.id;
        }

        return this.categorieRepo.save(cat);
    }
}
