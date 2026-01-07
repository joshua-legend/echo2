import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    console.log('test');
    return 'test';
  }

  getHelloBanana(): string {
    return 'Hello Banana!';
  }
}
