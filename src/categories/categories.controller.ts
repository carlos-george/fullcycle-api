import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategorieService } from './shared/categorie.service';
import { Categorie } from './shared/categorie';

@Controller('categories')
export class CategoriesController {

    constructor(private categorieService: CategorieService) {

    }

    @Get()
    async getAll(): Promise<Categorie[]> {
        return this.categorieService.getAll();
    }

    @Post()
    async create(@Body() categorie: Categorie): Promise<Categorie> {
        return this.categorieService.create(categorie);
    }

}
