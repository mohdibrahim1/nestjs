import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScreeningQuestionsModule } from './screening-questions/screening-questions.module';
import { ScreeningQuestions } from './screening-questions/screening-questions.entity';
import { QuestionModule } from './question/question.module';
import { Question } from './question/question.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'winworld@1',
    database: 'postgres',
    entities: [User, ScreeningQuestions, Question],
  }), UsersModule, ScreeningQuestionsModule, QuestionModule]
})
export class AppModule { }
