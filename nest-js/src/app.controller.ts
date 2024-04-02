import {Controller, Get, Param, UseGuards, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {LogRouteGuard} from "./guard/LogRouteGuard";
import {LogControllerGuard} from "./guard/LogControllerGuard";
import {LogControllerInterceptor} from "./interceptor/LogControllerInterceptor";
import {LogRouteInterceptor} from "./interceptor/LogRouteInterceptor";
import {ValidationPipe} from "./pipe/ValidationPipe";



@Controller()
@UseInterceptors(LogControllerInterceptor)
@UseGuards(LogControllerGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LogRouteGuard)
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }


  @UseInterceptors(LogRouteInterceptor)
  @Get('/hello/:name')
  getHelloName(@Param('name', ValidationPipe) name : string): string {
    return this.appService.getHelloName(name);
  }

  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }
}
