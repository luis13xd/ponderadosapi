import { Faculty, FacultyDocument } from './entities/faculty.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { DataAlreadyExistsException } from 'src/shared/exceptions/data-already-exists.exception';

@Injectable()
export class FacultyService {
  constructor(
    @InjectModel(Faculty.name) private facultyModel: Model<FacultyDocument>,
  ) {}
  async create(createFacultyDto: CreateFacultyDto) {
    try {
      const faculty = await this.facultyModel.create(createFacultyDto);
      return faculty;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('Faculty');
      }
      throw e;
    }
  }

  async findAll(): Promise<Faculty[]> {
    const faculties = await this.facultyModel.find();
    return faculties;
  }

  async findOne(id: string | Types.ObjectId): Promise<Faculty> {
    const faculty = await this.facultyModel.findById(id);

    if (!faculty) {
      throw new NotFoundException('faculty');
    }
    return faculty;
  }

  async update(
    id: string | Types.ObjectId,
    updateFacultyDto: UpdateFacultyDto,
  ): Promise<Faculty> {
    try {
      const faculty = await this.facultyModel
        .findByIdAndUpdate(id, updateFacultyDto)
        .exec();
      if (!faculty) {
        throw new NotFoundException('faculty');
      }
      return faculty;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('Faculty');
      }
      throw e;
    }
  }

  async remove(id: string | Types.ObjectId) {
    try {
      const faculty = await this.facultyModel.findByIdAndDelete(id).exec();
      if (!faculty) {
        throw new NotFoundException('faculty');
      }
      return faculty;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('Faculty');
      }
      throw e;
    }
  }
}
