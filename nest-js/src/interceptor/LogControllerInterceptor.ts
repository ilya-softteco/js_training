// logger.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {Observable, tap} from 'rxjs';

@Injectable()
export class LogControllerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        request.params.name = `${request.params.name} -> Interceptor Controller `
        console.log('Interceptor Controller...');

        return next.handle();
    }
}