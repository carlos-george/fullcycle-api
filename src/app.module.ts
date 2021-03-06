import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/config/database/db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
