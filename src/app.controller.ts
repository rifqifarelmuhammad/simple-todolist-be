import { Controller, Get, Res } from '@nestjs/common';
import { request } from 'http';
import { AppService } from './app.service';
// import {  }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // console.log(cookie);
    return this.appService.getHello();
  }
}
