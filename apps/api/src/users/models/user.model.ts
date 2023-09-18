import { AfterLoad, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    @Column()
    lastName: string;

    @AfterLoad()
    getName() {
        return this.firstName + '' + this.lastName;
    }
}