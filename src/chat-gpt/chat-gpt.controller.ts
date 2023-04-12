import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ChatGPTSerivce } from './chat-gpt.service';
import { CreateChatContentDto } from './dto/create-chat-content.dto';
import { UpdateChatContentDto } from './dto/update-chat-content.dto';

@Controller('chat-gpt')
export class ChatGPTController {
  constructor(private readonly chatGPTService: ChatGPTSerivce) {}

  @Post()
  create(@Body() createChatContentDto: CreateChatContentDto) {
    return this.chatGPTService.create(createChatContentDto);
  }

  @Get()
  findAll() {
    return this.chatGPTService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatGPTService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateChatContentDto: UpdateChatContentDto,
  ) {
    return this.chatGPTService.update(id, updateChatContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatGPTService.remove(+id);
  }
}
