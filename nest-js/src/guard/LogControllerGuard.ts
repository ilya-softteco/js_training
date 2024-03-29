import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LogControllerGuard implements CanActivate {
    canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
        // const request = context.switchToHttp().getRequest();
        // Здесь вы можете проверить, авторизован ли пользователь
        // Например, проверьте наличие токена или сессии

        console.log('Guard Controller... ')
        return true; // Вернуть true, если пользователь авторизован
    }
}