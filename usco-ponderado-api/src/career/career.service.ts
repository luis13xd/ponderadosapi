import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DataAlreadyExistsException } from 'src/shared/exceptions/data-already-exists.exception';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { Career, CareerDocument } from './entities/career.entity';

@Injectable()
export class CareerService {
  constructor(
    @InjectModel(Career.name) private careerModel: Model<CareerDocument>,
  ) {}
  async create(createCareerDto: CreateCareerDto) {
    if (typeof createCareerDto.faculty === 'string') {
      if (!Types.ObjectId.isValid(createCareerDto.faculty)) {
        throw new Error('bad brand id');
      }
      createCareerDto.faculty = new Types.ObjectId(createCareerDto.faculty);
    }
    try {
      const career = await this.careerModel.create(createCareerDto);
      return career;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('Career');
      }
      throw e;
    }
  }

  async findAll(): Promise<Career[]> {
    const careers = await this.careerModel.find().populate(['faculty']);
    return careers;
  }

  async findOne(id: string | Types.ObjectId): Promise<Career> {
    const career = await this.careerModel.findById(id).populate(['faculty']);

    if (!career) {
      throw new NotFoundException('career');
    }
    return career;
  }

  async update(id: string | Types.ObjectId, updateCareerDto: UpdateCareerDto) {
    if (typeof updateCareerDto.faculty === 'string') {
      if (!Types.ObjectId.isValid(updateCareerDto.faculty)) {
        throw new Error('bad brand id');
      }
      updateCareerDto.faculty = new Types.ObjectId(updateCareerDto.faculty);
    }
    try {
      const career = await this.careerModel
        .findByIdAndUpdate(id, updateCareerDto)
        .exec();
      if (!career) {
        throw new NotFoundException('faculty');
      }
      return career;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('career');
      }
      throw e;
    }
  }

  async remove(id: string | Types.ObjectId) {
    try {
      const career = await this.careerModel.findByIdAndDelete(id).exec();
      if (!career) {
        throw new NotFoundException('faculty');
      }
      return career;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('career');
      }
      throw e;
    }
  }
}
