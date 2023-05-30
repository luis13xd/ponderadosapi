import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.use(
    morgan(
      ':remote-addr - [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]',
    ),
  );
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
