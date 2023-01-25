import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { TodolistService } from './todolist.service';

@Controller('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Get()
  getData(){
    return this.todolistService.getData();
  }

  @Post()
  postData(@Body() todo:TodoDTO){
    return this.todolistService.createData(todo);
  }

  @Delete(':id')
  deleteData(@Param('id') id:string){
    return this.todolistService.deleteData(+id);
  }

  @Put(':id')
  updateData(@Param('id') id:string, @Body() todo:Partial<TodoDTO>){
    return this.todolistService.updateData(+id, todo);
  }
}
