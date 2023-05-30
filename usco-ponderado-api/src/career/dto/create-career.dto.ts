import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCareerDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  estimatedProgramDuration: string;
  @IsNumber()
  @IsNotEmpty()
  numberOfAcademicCredits: number;
  @IsString()
  @IsNotEmpty()
  academicLevel: string;
  @IsString()
  @IsNotEmpty()
  levelOfEducation: string;
  @IsString()
  @IsNotEmpty()
  admissionPeriodicity: string;
  @IsString()
  @IsNotEmpty()
  trainingModality: string;
  @IsString()
  @IsNotEmpty()
  degreeAwarded: string;
  @IsString()
  @IsNotEmpty()
  sniesRegistry: string;
  @IsNotEmpty()
  @IsString()
  faculty: string | Types.ObjectId;
}
