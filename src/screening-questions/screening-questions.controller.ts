import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { ScreeningQuestions } from './screening-questions.entity';
import { ScreeningQuestionsService } from './screening-questions.service';

@Controller('ScreeningQuestions')
export class ScreeningQuestionsController {
    constructor(private readonly screeningQuestionsService: ScreeningQuestionsService) { }
    @Get('all')
    async getAll(): Promise<ScreeningQuestions[]> {
        return await this.screeningQuestionsService.findAll();
    }
    @Post('add')
    @HttpCode(201)
    async createEmployee(@Body() screenQuestion: any) {
        console.log("data :",screenQuestion)
        return await this.screeningQuestionsService.create(screenQuestion);
    }

}
