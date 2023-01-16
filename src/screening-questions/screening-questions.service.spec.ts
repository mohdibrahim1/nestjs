import { Test, TestingModule } from '@nestjs/testing';
import { ScreeningQuestionsService } from './screening-questions.service';

describe('ScreeningQuestionsService', () => {
  let service: ScreeningQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScreeningQuestionsService],
    }).compile();

    service = module.get<ScreeningQuestionsService>(ScreeningQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
