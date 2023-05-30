import { Module } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { FacultyController } from './faculty.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Faculty, FacultySchema } from './entities/faculty.entity';

export const FacultyModels = [{ name: Faculty.name, schema: FacultySchema }];

@Module({
  controllers: [FacultyController],
  providers: [FacultyService],
  imports: [MongooseModule.forFeature([...FacultyModels])],
})
export class FacultyModule {}
