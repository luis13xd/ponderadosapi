import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';
import { CareerService } from './career.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}

  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careerService.create(createCareerDto);
  }

  @Get()
  findAll() {
    return this.careerService.findAll();
  }

  @Get(':id')
  findOne(@Param(new ValidateObjectId()) { id }: { id: string }) {
    return this.careerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param(new ValidateObjectId()) { id }: { id: string },
    @Body() updateCareerDto: UpdateCareerDto,
  ) {
    return this.careerService.update(id, updateCareerDto);
  }

  @Delete(':id')
  remove(@Param(new ValidateObjectId()) { id }: { id: string }) {
    return this.careerService.remove(id);
  }
}
