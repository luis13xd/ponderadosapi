import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';
import { Faculty } from './entities/faculty.entity';

@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultyService.create(createFacultyDto);
  }

  @Get()
  findAll(): Promise<Faculty[]> {
    return this.facultyService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(new ValidateObjectId()) { id }: { id: string },
  ): Promise<Faculty> {
    return this.facultyService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param(new ValidateObjectId()) { id }: { id: string },
    @Body() updateFacultyDto: UpdateFacultyDto,
  ) {
    return this.facultyService.update(id, updateFacultyDto);
  }

  @Delete(':id')
  remove(@Param(new ValidateObjectId()) { id }: { id: string }) {
    return this.facultyService.remove(id);
  }
}
