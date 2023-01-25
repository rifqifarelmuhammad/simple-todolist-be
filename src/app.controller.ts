import { Controller, Get, Res } from '@nestjs/common';
import { request } from 'http';
import { AppService } from './app.service';
import { CustomCookie } from './cookies/customCookie.decorators';
// import {  }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res({ passthrough: true }) response, @CustomCookie('test') cookie: string): string {
    response.cookie('test', 'Haloo');

    // console.log(cookie);
    return this.appService.getHello() + cookie;
  }
}
