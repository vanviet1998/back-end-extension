import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChatContentDto {
  @IsString()
  @IsNotEmpty()
  keyWord: string;
}
