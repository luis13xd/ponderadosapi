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
import { PeriodService } from './period.service';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { Period } from './entities/period.entity';

@Controller('period')
export class PeriodController {
  constructor(private readonly periodService: PeriodService) {}

  @Post()
  create(@Body() createPeriodDto: CreatePeriodDto) {
    return this.periodService.create(createPeriodDto);
  }

  @Get()
  findAll(): Promise<Period[]> {
    return this.periodService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(new ValidateObjectId()) { id }: { id: string },
  ): Promise<Period> {
    return this.periodService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param(new ValidateObjectId()) { id }: { id: string },
    @Body() updatePeriodDto: UpdatePeriodDto,
  ) {
    return this.periodService.update(id, updatePeriodDto);
  }

  @Delete(':id')
  remove(@Param(new ValidateObjectId()) { id }: { id: string }) {
    return this.periodService.remove(id);
  }
}
