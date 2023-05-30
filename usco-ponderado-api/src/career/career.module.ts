import { Module } from '@nestjs/common';
import { CareerService } from './career.service';
import { CareerController } from './career.controller';
import { Career, CareerSchema } from './entities/career.entity';
import { MongooseModule } from '@nestjs/mongoose';

export const CareerModels = [{ name: Career.name, schema: CareerSchema }];

@Module({
  controllers: [CareerController],
  providers: [CareerService],
  imports: [MongooseModule.forFeature([...CareerModels])],
})
export class CareerModule {}
