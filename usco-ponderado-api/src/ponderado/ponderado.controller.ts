import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PonderadoService } from './ponderado.service';
import { CreatePonderadoDto } from './dto/create-ponderado.dto';
import { UpdatePonderadoDto } from './dto/update-ponderado.dto';
import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';

@Controller('ponderado')
export class PonderadoController {
  constructor(private readonly ponderadoService: PonderadoService) {}

  @Post()
  create(@Body() createPonderadoDto: CreatePonderadoDto) {
    return this.ponderadoService.create(createPonderadoDto);
  }

  @Get()
  findAll() {
    return this.ponderadoService.findAll();
  }

  @Get(':id')
  findOne(@Param(new ValidateObjectId()) { id }: { id: string }) {
    return this.ponderadoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param(new ValidateObjectId()) { id }: { id: string },
    @Body() updatePonderadoDto: UpdatePonderadoDto,
  ) {
    return this.ponderadoService.update(id, updatePonderadoDto);
  }

  @Delete(':id')
  remove(@Param(new ValidateObjectId()) { id }: { id: string }) {
    return this.ponderadoService.remove(id);
  }
}
