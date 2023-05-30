import { Faculty } from './../../faculty/entities/faculty.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Career {
  @Prop({ required: true, unique: true, minlength: 1 })
  title: string;
  @Prop({ required: true })
  estimatedProgramDuration: string;
  @Prop({ required: true })
  numberOfAcademicCredits: number;
  @Prop({ required: true })
  academicLevel: string;
  @Prop({ required: true })
  levelOfEducation: string;
  @Prop({ required: true })
  admissionPeriodicity: string;
  @Prop({ required: true })
  trainingModality: string;
  @Prop({ required: true })
  degreeAwarded: string;
  @Prop({ required: true })
  sniesRegistry: string;
  @Prop({ index: { required: true }, type: Types.ObjectId, ref: () => Faculty })
  faculty: Faculty;
}

export type CareerDocument = Career & Document;
export const CareerSchema = SchemaFactory.createForClass(Career);
