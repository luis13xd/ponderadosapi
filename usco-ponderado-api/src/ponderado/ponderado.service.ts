import { Ponderado, PonderadoDocument } from './entities/ponderado.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePonderadoDto } from './dto/create-ponderado.dto';
import { UpdatePonderadoDto } from './dto/update-ponderado.dto';
import { Model, Types } from 'mongoose';
import { DataAlreadyExistsException } from 'src/shared/exceptions/data-already-exists.exception';
import { PonderadoByFaculty } from './entities/ponderado.interface';

@Injectable()
export class PonderadoService {
  constructor(
    @InjectModel(Ponderado.name)
    private ponderadoModel: Model<PonderadoDocument>,
  ) {}

  async create(createPonderadoDto: CreatePonderadoDto) {
    if (typeof createPonderadoDto.career === 'string') {
      if (!Types.ObjectId.isValid(createPonderadoDto.career)) {
        throw new Error('bad id');
      }
      createPonderadoDto.career = new Types.ObjectId(createPonderadoDto.career);
    }
    try {
      const search = await this.ponderadoModel.findOne({
        career: createPonderadoDto.career,
      });

      if (search) {
        throw new DataAlreadyExistsException('ponderado');
      }
      const ponderado = await this.ponderadoModel.create(createPonderadoDto);
      return ponderado;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('ponderado');
      }
      throw e;
    }
  }

  async findAll(): Promise<Ponderado[]> {
    const ponderados = await this.ponderadoModel.find().populate(['career']);
    await this.ponderadoModel.populate(ponderados, {
      path: 'career',
      populate: ['faculty'],
    });
    return ponderados;
  }

  async findOne(id: string | Types.ObjectId) {
    const ponderado = await this.ponderadoModel.findById(id);

    if (!ponderado) {
      throw new NotFoundException('ponderado');
    }
    await this.ponderadoModel.populate(ponderado, {
      path: 'career',
      populate: ['faculty'],
    });
    return ponderado;
  }

  async update(
    id: string | Types.ObjectId,
    updatePonderadoDto: UpdatePonderadoDto,
  ) {
    if (typeof updatePonderadoDto.career === 'string') {
      if (!Types.ObjectId.isValid(updatePonderadoDto.career)) {
        throw new Error('bad id');
      }
      updatePonderadoDto.career = new Types.ObjectId(updatePonderadoDto.career);
    }
    try {
      const ponderado = await this.ponderadoModel
        .findByIdAndUpdate(id, updatePonderadoDto)
        .exec();
      if (!ponderado) {
        throw new NotFoundException('ponderado');
      }
      return ponderado;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('ponderado');
      }
      throw e;
    }
  }

  async remove(id: string | Types.ObjectId) {
    try {
      const ponderado = await this.ponderadoModel.findByIdAndDelete(id).exec();
      if (!ponderado) {
        throw new NotFoundException('ponderado');
      }
      return ponderado;
    } catch (e) {
      if (e.code === 11000) {
        throw new DataAlreadyExistsException('ponderado');
      }
      throw e;
    }
  }
}
