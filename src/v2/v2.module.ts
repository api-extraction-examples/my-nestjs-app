import { Module } from '@nestjs/common';
import { DoAnotherThingController } from './do-another-thing/do-another-thing.controller';
import { DoAnotherThingService } from './do-another-thing/do-another-thing.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';

@Module({
  controllers: [DoAnotherThingController, AdminController],
  providers: [AdminService, DoAnotherThingService]
})
export class V2Module {}
