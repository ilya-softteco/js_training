import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {LogGlobalGuard} from "./guard/LogGlobalGuard";
import {LogGlobalInterceptor} from "./interceptor/LogGlobalInterceptor";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new LogGlobalGuard());
  app.useGlobalInterceptors(new LogGlobalInterceptor());

  app.enableShutdownHooks();
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(3000);

  //app.close();
}
bootstrap();
