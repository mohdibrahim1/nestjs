import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("ScreeningQuestions")
export class ScreeningQuestions {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    question1: boolean;

    @ApiProperty()
    @Column()
    question2: string;

    @ApiProperty()
    @Column()
    question3: string;

    @ApiProperty()
    @Column()
    question4: string;

    @ApiProperty()
    @Column()
    question5: string;
}