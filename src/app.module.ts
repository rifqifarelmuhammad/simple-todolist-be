import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseService } from './firebase/firebase.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodolistModule } from './todolist/todolist.module';
// import { TodolistModule } from './todolist/todolist.module';
import { AvatarModule } from './avatar/avatar.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [AuthModule, 
    ConfigModule.forRoot(), 
    PrismaModule, 
    TodolistModule, 
    AvatarModule,
    MulterModule.register({
      dest: './images'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images')
    }),],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
