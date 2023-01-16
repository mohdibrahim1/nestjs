import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreeningQuestionsController } from './screening-questions.controller';
import { ScreeningQuestions } from './screening-questions.entity';
import { ScreeningQuestionsService } from './screening-questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScreeningQuestions])],
  controllers: [ScreeningQuestionsController],
  providers: [ScreeningQuestionsService]
})
export class ScreeningQuestionsModule {}
