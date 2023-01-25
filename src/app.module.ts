import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseService } from './firebase/firebase.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodolistModule } from './todolist/todolist.module';
// import { TodolistModule } from './todolist/todolist.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), PrismaModule, TodolistModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
