import {Controller, Get, Param, Delete, OnModuleInit, OnModuleDestroy, INestApplication, Inject} from '@nestjs/common';
import { TestHooksService } from './test-hooks.service';

@Controller('test-hooks')
export class TestHooksController {


  constructor(private readonly testHooksService: TestHooksService,
             // @Inject('NestApplication') private readonly app: INestApplication,
              ) {}
  
  @Get('ping')
  ping() {
    return 'Pong';
  } 
  @Get('close')
  closeApp() {
   // this.app.close()

  }


  @Get()
  findAll() {
    return this.testHooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testHooksService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testHooksService.remove(+id);
  }
}
