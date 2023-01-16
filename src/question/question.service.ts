import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private screeningQuestions: Repository<Question>) { }

    findAll(): Promise<Question[]> {
        return this.screeningQuestions.find();
    }
}
