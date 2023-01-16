import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    Name: string;

    @ApiProperty()
    @Column()
    Email: string;
    
    @ApiProperty()
    @Column()
    Mobile: number;
}