import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScreeningQuestions } from './screening-questions.entity';

@Injectable()
export class ScreeningQuestionsService {
    constructor(@InjectRepository(ScreeningQuestions) private screeningQuestions: Repository<ScreeningQuestions>) { }

    findAll(): Promise<ScreeningQuestions[]> {
        return this.screeningQuestions.find();
    }
    create(screenQuestion) {
        this.screeningQuestions.insert(screenQuestion)
    }
}
