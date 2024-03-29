import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LogGlobalMiddleware} from "./middleware/LogGlobalMiddleware";
import {LogControllerMiddleware} from "./middleware/LogControllerMiddleware";
import {LogRouteMiddleware} from "./middleware/LogRouteMiddleware";

@Module({
    imports: [],
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
