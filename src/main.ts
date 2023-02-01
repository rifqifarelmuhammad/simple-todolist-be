import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.enableCors({
    origin: 'http://localhost:3000',
    allowedHeaders: '*',
  });
  await app.listen(8000);
}
bootstrap();
