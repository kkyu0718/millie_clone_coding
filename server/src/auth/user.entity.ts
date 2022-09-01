import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

     // refresh token 저장
    @Column({  nullable: true  })
    refreshToken?: string;

}
