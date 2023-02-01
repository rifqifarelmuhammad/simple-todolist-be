import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Avatar } from './avatar.entity';
import { v2 } from 'cloudinary';

@Injectable()
export class AvatarService {
    constructor(private prisma: PrismaService){}

    async getAllAvatar(){
        return this.prisma.avatar.findMany()
    }

    async postAvatar(data: Prisma.avatarCreateInput): Promise<Avatar>{
        return this.prisma.avatar.create({data})
    }

    async deleteAvatar(uId: string){
        const userAvatar = await this.prisma.avatar.findUnique({where: {uId:uId}})

        await v2.uploader.destroy(userAvatar.file, function(error,result) {
            console.log(result, error) })
            .then(resp => console.log(resp))
            .catch(_err=> console.log("Something went wrong, please try again later."));
        return this.prisma.avatar.delete({where: {uId:uId}})
    }

    async updateAvatar(uId: string, data: Prisma.todolistUpdateInput): Promise<Avatar>{
        const userAvatar = await this.prisma.avatar.findUnique({where: {uId:uId}})
        
        await v2.uploader.destroy(userAvatar.file, function(error,result) {
            console.log(result, error) })
            .then(resp => console.log(resp))
            .catch(_err=> console.log("Something went wrong, please try again later."));
        
        return this.prisma.avatar.update({where: {uId:uId}, data})
    }
}
