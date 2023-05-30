import { Module } from '@nestjs/common';
import { PonderadoService } from './ponderado.service';
import { PonderadoController } from './ponderado.controller';
import { Ponderado, PonderadoSchema } from './entities/ponderado.entity';
import { MongooseModule } from '@nestjs/mongoose';

export const PonderadoModels = [
  { name: Ponderado.name, schema: PonderadoSchema },
];

@Module({
  controllers: [PonderadoController],
  providers: [PonderadoService],
  imports: [MongooseModule.forFeature([...PonderadoModels])],
})
export class PonderadoModule {}
