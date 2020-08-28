import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategorieService } from './shared/categorie.service';
import { CategorieEntity } from 'src/models/categorie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CategorieEntity])],
    controllers: [CategoriesController],
    providers: [CategorieService]
})
export class CategoriesModule { }
