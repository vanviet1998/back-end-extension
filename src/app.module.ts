import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGPTModule } from './chat-gpt/chat-gpt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ChatGPTModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
