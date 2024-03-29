import {Controller, Get, Param, UseGuards, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {LogRouteGuard} from "./guard/LogRouteGuard";
import {LogControllerGuard} from "./guard/LogControllerGuard";
import {LogControllerInterceptor} from "./interceptor/LogControllerInterceptor";
import {LogRouteInterceptor} from "./interceptor/LogRouteInterceptor";
import {ValidationPipe} from "./pipe/ValidationPipe";


/**
 * Request lifecycle в NestJS - это последовательность действий, которые происходят при обработке HTTP-запроса от начала до ответа
 * Middleware - это функции, которые выполняются перед обработчиком маршрута.
    Middleware выполняются последовательно в том порядке, в котором они объявлены,

 * Гварды (Guards) в NestJS - это классы, которые позволяют контролировать доступ к маршрутам на основе определенных условий
  Глобальные стражи выполняются первыми, затем стражи контроллера, и, наконец, стражи маршрута.
  Гварды имеют одну основную ответственность: определить, будет ли данный запрос обрабатываться обработчиком маршрута или нет.

 * Интерцепторы (Interceptors) в NestJS - это классы, которые позволяют добавлять дополнительную логику перед и после выполнения методов
 обработчиков маршрутов.
 Добавление дополнительной логики перед/после выполнения методов.

 * Pipes в Nest JS — это мощный механизм для обработки данных в приложении
 Трансформация: преобразование входных данных в нужный формат (например, из строки в целое число).
 Валидация: проверка входных данных; если данные валидны, они передаются без изменений, иначе выбрасывается исключение.
 * */
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
