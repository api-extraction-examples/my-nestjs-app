import { Controller, Get } from '@nestjs/common';
import { DoAnotherThingService } from './do-another-thing.service';

@Controller('do-another-thing')
export class DoAnotherThingController {
    constructor(private readonly doAnotherThingService: DoAnotherThingService) {}

    @Get()
    getHello(): string {
        return this.doAnotherThingService.getHello();
    }
}
