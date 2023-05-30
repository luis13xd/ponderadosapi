import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePeriodDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  title: string;
  @IsNumber()
  @IsNotEmpty()
  value: string;
}
