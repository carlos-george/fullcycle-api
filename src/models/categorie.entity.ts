import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategorieEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

}