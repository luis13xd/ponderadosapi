import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Period {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  value: number;
}
export type PeriodDocument = Period & Document;
export const PeriodSchema = SchemaFactory.createForClass(Period);
