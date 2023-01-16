import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("Question")
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    Question: string;

    @ApiProperty()
    @Column()
    Active: boolean;

    
}