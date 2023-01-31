import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Todolist } from './todo.entity';

@Injectable()
export class TodolistService {
    constructor(private prisma: PrismaService){}

    async getData(){
        return this.prisma.todolist.findMany()
    }

    async createData(data: Prisma.todolistCreateInput): Promise<Todolist>{
        data.isFinished = JSON.parse(data.isFinished + "")
        return this.prisma.todolist.create({data});
    }

    async deleteData(id: number){
        return this.prisma.todolist.delete({where: {id: id}});
    }

    async updateData(id: number, data: Prisma.todolistUpdateInput): Promise<Todolist>{
        data.isFinished = JSON.parse(data.isFinished+"")
        return this.prisma.todolist.update({where: {id:id,}, data})
    }
}