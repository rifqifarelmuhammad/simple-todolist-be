import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://simple-todolist-fe.vercel.app', 'http://localhost:3000'],
    allowedHeaders: '*',
    credentials: true,
    methods: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }); 

  await app.listen(8000);
}
bootstrap();
