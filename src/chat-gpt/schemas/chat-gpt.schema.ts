import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatGptDocument = ChatGPT & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class ChatGPT {
  @Prop({ required: true })
  keyWord: string;

  @Prop({ required: true })
  description: string;
}

export const ChatGPTSchema = SchemaFactory.createForClass(ChatGPT);
