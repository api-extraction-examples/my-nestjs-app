import { Controller, Get, RequestMapping, RequestMethod } from '@nestjs/common';

import { AppService } from './app.service';

function logParam(target: any, methodKey: string, parameterIndex: number) {
  target.test = methodKey;
  // and parameterIndex says which parameter
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  someMethod(@logParam someParam: string) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @RequestMapping({ path: 'custom', method: RequestMethod.GET })
  customGetHandler(): string {
    return 'This is a custom GET handler';
  }

  @RequestMapping({ path: 'custom', method: RequestMethod.POST })
  customPostHandler(): string {
    return 'This is a custom POST handler';
  }

  @RequestMapping() // This works as a GET. Since already has a Get handler, this will be ignored
  anotherCustomGetHandler(): string {
    return 'This is another custom Get handler';
  }

  @Get() // This one will also be ignored since GET was already registered
  getHello2(): string {
    return "Hellllllow 2 (ignored)";
  }
}
