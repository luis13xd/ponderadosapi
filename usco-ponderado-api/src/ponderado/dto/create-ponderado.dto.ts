import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';
import { PeriodsOfCareer } from '../entities/ponderado.interface';

export class CreatePonderadoDto {
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  lecturaCritica: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  cienciasNaturales: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  matematicas: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  ingles: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  socialesYCiudadanas: number;
  @IsNotEmpty()
  @IsString()
  career: string | Types.ObjectId;
  @IsOptional()
  periods?: PeriodsOfCareer[];
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  cierre1: number;
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  cierre2: number;
}
