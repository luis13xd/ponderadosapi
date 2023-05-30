import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  description: string;
}
