import { PartialType } from '@nestjs/mapped-types';
import { CreatePonderadoDto } from './create-ponderado.dto';

export class UpdatePonderadoDto extends PartialType(CreatePonderadoDto) {}
