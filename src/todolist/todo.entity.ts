import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todolist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    isFinished: boolean;
}