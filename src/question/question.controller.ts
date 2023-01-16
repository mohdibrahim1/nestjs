import { Controller ,Get} from '@nestjs/common';
import { Question } from './question.entity';
import { QuestionService } from './question.service';

@Controller('Question')
export class QuestionController {
    constructor(private readonly questionsService: QuestionService) { }
    @Get('all')
    async getAll(): Promise<Question[]> {
        return await this.questionsService.findAll();
    }
}
