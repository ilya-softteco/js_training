// logger.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {Observable, tap} from 'rxjs';

@Injectable()
export class LogRouteInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        request.params.name = `${request.params.name} -> Interceptor Route`
        console.log('Interceptor Route...');

        return next.handle();
    }
}