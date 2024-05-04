import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TallerChelseaDataSource } from './database/tallerchelsea.datasource';

async function bootstrap() {
  await TallerChelseaDataSource.initialize();

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(AppModule.port);
}
bootstrap();
