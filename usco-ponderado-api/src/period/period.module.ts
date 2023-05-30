import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Period, PeriodSchema } from './entities/period.entity';

export const PeriodModels = [{ name: Period.name, schema: PeriodSchema }];

@Module({
  controllers: [PeriodController],
  providers: [PeriodService],
  imports: [MongooseModule.forFeature([...PeriodModels])],
})
export class PeriodModule {}
