import {Module, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import { TestHooksService } from './test-hooks.service';
import { TestHooksController } from './test-hooks.controller';
import {NestApplication} from "@nestjs/core";

@Module({
  //imports: [NestApplication],
  controllers: [TestHooksController],
  providers: [TestHooksService]
})
export class TestHooksModule  implements OnModuleInit, OnModuleDestroy  {



  onModuleDestroy(): any {
    console.log('TestHooksModule destroy!');

  }

  onModuleInit(): any {
    console.log('TestHooksModule initialized!');
    // Дополнительные действия при инициализации модуля
  }

}
