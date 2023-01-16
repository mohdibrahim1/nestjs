import { Test, TestingModule } from '@nestjs/testing';
import { ScreeningQuestionsController } from './screening-questions.controller';

describe('ScreeningQuestionsController', () => {
  let controller: ScreeningQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScreeningQuestionsController],
    }).compile();

    controller = module.get<ScreeningQuestionsController>(ScreeningQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
