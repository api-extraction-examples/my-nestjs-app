import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from './config.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const withApiPrefix = config.withApiPrefix;
  if (withApiPrefix) {
    app.setGlobalPrefix('api'); // In theory, this is Options
  }
  // In this "hidden else", the prefix shouldn't be set
  await app.listen(3000);
}
bootstrap();
