import { Test, TestingModule } from '@nestjs/testing';
import { ChatGPTSerivce } from './chat-gpt.service';

describe('ChatService', () => {
  let service: ChatGPTSerivce;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGPTSerivce],
    }).compile();

    service = module.get<ChatGPTSerivce>(ChatGPTSerivce);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
