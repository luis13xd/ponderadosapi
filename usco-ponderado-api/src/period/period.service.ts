import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DataAlreadyExistsException } from 'src/shared/exceptions/data-already-exists.exception';
import { DataNotFoundException } from 'src/shared/exceptions/data-not-found.exception';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { Period, PeriodDocument } from './entities/period.entity';

@Injectable()
export class PeriodService {
  constructor(
    @InjectModel(Period.name) private periodModel: Model<PeriodDocument>,
  ) {}
  async create(createPeriodDto: CreatePeriodDto) {
    try {
      const period = await this.periodModel.create(createPeriodDto);
      return period;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('period');
      }
      throw e;
    }
  }

  async findAll(): Promise<Period[]> {
    const periods = await this.periodModel.find();
    return periods;
  }

  async findOne(id: string | Types.ObjectId): Promise<Period> {
    const period = await this.periodModel.findById(id);

    if (!period) {
      throw new DataNotFoundException('period');
    }
    return period;
  }

  async update(
    id: string | Types.ObjectId,
    updatePeriodDto: UpdatePeriodDto,
  ): Promise<Period> {
    try {
      const period = await this.periodModel
        .findByIdAndUpdate(id, updatePeriodDto)
        .exec();
      if (!period) {
        throw new NotFoundException('period');
      }
      return period;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('period');
      }
      throw e;
    }
  }

  async remove(id: string | Types.ObjectId) {
    try {
      const period = await this.periodModel.findByIdAndDelete(id).exec();
      if (!period) {
        throw new NotFoundException('period');
      }
      return period;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('period');
      }
      throw e;
    }
  }
}
