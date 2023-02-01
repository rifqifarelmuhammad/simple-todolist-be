import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: 'https://simple-todolist-fe.vercel.app',
    allowedHeaders: '*',
    credentials: true,
    methods: '*'
  });
  await app.listen(8000);
}
bootstrap();
