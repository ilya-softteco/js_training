import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LogGlobalMiddleware} from "./middleware/LogGlobalMiddleware";
import {LogControllerMiddleware} from "./middleware/LogControllerMiddleware";
import {LogRouteMiddleware} from "./middleware/LogRouteMiddleware";
import { TestHooksModule } from './test-hooks/test-hooks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TestHooksModule,
        MongooseModule.forRoot('mongodb://root:example@localhost:27018'),
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {

        consumer
            .apply(LogRouteMiddleware)
            .forRoutes({path: '/hello', method: RequestMethod.GET});

        consumer
          .apply(LogGlobalMiddleware)
          .forRoutes('*');

        consumer
            .apply(LogControllerMiddleware)
            .forRoutes(AppController);

    }
}
