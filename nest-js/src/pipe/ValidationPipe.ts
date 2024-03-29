import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any): string {
        return `${value} Pipe`;
    }
}