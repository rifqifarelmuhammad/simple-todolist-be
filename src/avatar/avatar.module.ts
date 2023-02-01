import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { AvatarController } from './avatar.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
// import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  controllers: [AvatarController],
  providers: [AvatarService]
})
export class AvatarModule {}
