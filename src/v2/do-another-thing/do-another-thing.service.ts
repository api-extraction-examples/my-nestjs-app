import { Injectable } from '@nestjs/common';

@Injectable()
export class DoAnotherThingService {
  getHello(): string {
    return 'Doing something else... :)';
  }
}
