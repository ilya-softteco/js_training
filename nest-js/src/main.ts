import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LogGlobalGuard} from "./guard/LogGlobalGuard";
import {LogGlobalInterceptor} from "./interceptor/LogGlobalInterceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new LogGlobalGuard());
  app.useGlobalInterceptors(new LogGlobalInterceptor());

  app.enableShutdownHooks();
  app.enableCors();
  await app.listen(3000);
  //app.close();
}
bootstrap();
