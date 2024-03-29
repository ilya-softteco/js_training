import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloName(name): string {
    return `Hello World! ${name}`;
  }


  getBye(): string {
    return 'Hello World!';
  }


}
