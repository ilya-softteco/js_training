// logger.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {Observable, tap} from 'rxjs';

@Injectable()
export class LogGlobalInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        request.params.name = `${request.params.name} -> Interceptor Global`
        console.log('Interceptor Global...');

        return next.handle();
    }
}