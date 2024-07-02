import { Controller, Get } from '@nestjs/common';
import { DoSomethingService } from './do-something-service';

@Controller({
    path: 'do-something',
    version: '1', // It seems this "version" doesn't change anything for excavator itself
})
export class DoSomethingController {
    constructor(private doSomethingService: DoSomethingService) {
    }

    @Get()
    getHello(): string {
        return this.doSomethingService.getHello();
    }
}
