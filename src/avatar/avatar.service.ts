import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Avatar } from './avatar.entity';
import { RemoveFile } from 'src/helper/removeFile';

@Injectable()
export class AvatarService {
    constructor(private prisma: PrismaService){}

    async getAllAvatar(){
        return this.prisma.avatar.findMany()
    }

    async getAvatar(fileName: string, res: any){
        return res.sendFile(fileName, { root: 'upload/avatar' })
    }

    async postAvatar(data: Prisma.avatarCreateInput): Promise<Avatar>{
        return this.prisma.avatar.create({data})
    }

    async deleteAvatar(uId: string){
        const userAvatar = await this.prisma.avatar.findUnique({where: {uId:uId}})
        
        await RemoveFile.removeFile(userAvatar.file)

        return this.prisma.avatar.delete({where: {uId:uId}})
    }

    async updateAvatar(uId: string, data: Prisma.todolistUpdateInput): Promise<Avatar>{
        const userAvatar = await this.prisma.avatar.findUnique({where: {uId:uId}})
        
        await RemoveFile.removeFile(userAvatar.file)
        
        return this.prisma.avatar.update({where: {uId:uId}, data})
    }
}
