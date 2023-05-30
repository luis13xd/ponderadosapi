import { Career } from './../../career/entities/career.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Period } from 'src/period/entities/period.entity';
import { PeriodsOfCareer } from './ponderado.interface';

@Schema({ timestamps: true })
export class Ponderado {
  @Prop({ required: true })
  lecturaCritica: number;
  @Prop({ required: true })
  cienciasNaturales: number;
  @Prop({ required: true })
  matematicas: number;
  @Prop({ required: true })
  ingles: number;
  @Prop({ required: true })
  socialesYCiudadanas: number;
  @Prop({ index: { required: true }, type: Types.ObjectId, ref: () => Career })
  career: Career;
  @Prop({
    required: true,
    type: Array,
    default: [],
  })
  periods: PeriodsOfCareer[];
  @Prop({ required: true })
  cierre1: number;
  @Prop({ required: true })
  cierre2: number;
}

export type PonderadoDocument = Ponderado & Document;
export const PonderadoSchema = SchemaFactory.createForClass(Ponderado);
