import { Module } from '@nestjs/common';
import { DoSomethingController } from './do-something/do-something.controller';
import { DoSomethingService } from './do-something/do-something-service';

@Module({
  controllers: [DoSomethingController],
  providers: [DoSomethingService],
})
export class V1Module {}
