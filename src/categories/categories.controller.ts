import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategorieService } from './shared/categorie.service';
import { CategorieDTO } from './shared/categorie.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private categorieService: CategorieService) {

    }

    @Get()
    async getAll(): Promise<CategorieDTO[]> {
        return this.categorieService.getAll();
    }

    @Post()
    async create(@Body() categorie: CategorieDTO): Promise<CategorieDTO> {
        return this.categorieService.create(categorie);
    }

}
