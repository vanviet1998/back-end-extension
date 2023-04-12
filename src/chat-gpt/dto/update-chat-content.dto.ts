import { PartialType } from '@nestjs/mapped-types';
import { CreateChatContentDto } from './create-chat-content.dto';

export class UpdateChatContentDto extends PartialType(CreateChatContentDto) {}
