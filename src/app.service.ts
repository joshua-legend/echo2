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
    return '동킹콩 Banana!!!!!!!!!!';
  }

  getHelloDubai(): string {
    return '두쫀쿠';
  }
}
