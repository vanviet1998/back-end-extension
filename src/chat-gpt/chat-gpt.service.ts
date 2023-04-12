import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatContentDto } from './dto/create-chat-content.dto';
import { UpdateChatContentDto } from './dto/update-chat-content.dto';
import { ChatGPT, ChatGptDocument } from './schemas/chat-gpt.schema';

@Injectable()
export class ChatGPTSerivce {
  constructor(
    @InjectModel(ChatGPT.name)
    private readonly chatGPTModel: Model<ChatGptDocument>,
  ) {}

  async create(createMenuDto: CreateChatContentDto): Promise<ChatGptDocument> {
    const isExited = await this.chatGPTModel.findOne({
      keyWord: createMenuDto.keyWord.toLocaleLowerCase(),
    });
    if (isExited?.id) {
      return isExited;
    }
    const { ChatGPTAPI } = await (eval('import("chatgpt")') as Promise<
      typeof import('chatgpt')
    >);

    const api = new ChatGPTAPI({
      apiKey: process.env.API_KEY,
      completionParams: {
        temperature: 0.5,
        top_p: 0.8,
      },
    });
    const res = await api.sendMessage(
      `Summarize ${createMenuDto.keyWord.toLocaleLowerCase()}`,
    );
    const chatGpt = new this.chatGPTModel({
      keyWord: createMenuDto.keyWord.toLocaleLowerCase(),
      description: res.text,
    });
    return chatGpt.save();
  }

  async findAll(): Promise<ChatGptDocument[]> {
    return this.chatGPTModel.find();
  }

  findOne(id: string) {
    return this.chatGPTModel.findById(id);
  }

  async update(
    id: string,
    updateMenuDto: UpdateChatContentDto,
  ): Promise<ChatGptDocument> {
    return this.chatGPTModel.findByIdAndUpdate(id, updateMenuDto);
  }

  async remove(id: number) {
    return this.chatGPTModel.findByIdAndRemove(id);
  }
}
