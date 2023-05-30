import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultyModule } from './faculty/faculty.module';
import { CareerModule } from './career/career.module';
import { PonderadoModule } from './ponderado/ponderado.module';
import { PeriodModule } from './period/period.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${configService.get('DB_URI')}`,
      }),
      inject: [ConfigService],
    }),
    FacultyModule,
    CareerModule,
    PonderadoModule,
    PeriodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
