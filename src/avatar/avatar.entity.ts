import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Avatar {

    @PrimaryGeneratedColumn()
    uId: string;

    @Column()
    file: string;

    @Column()
    url: string;
}