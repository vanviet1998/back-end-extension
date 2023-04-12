import { Module } from '@nestjs/common';
import { ChatGPTSerivce } from './chat-gpt.service';
import { ChatGPTController } from './chat-gpt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGPT, ChatGPTSchema } from './schemas/chat-gpt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ChatGPT.name,
        schema: ChatGPTSchema,
      },
    ]),
  ],
  controllers: [ChatGPTController],
  providers: [ChatGPTSerivce],
})
export class ChatGPTModule {}
