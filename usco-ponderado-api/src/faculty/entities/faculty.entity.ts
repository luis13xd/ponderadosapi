import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Faculty {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
}

export type FacultyDocument = Faculty & Document;
export const FacultySchema = SchemaFactory.createForClass(Faculty);
