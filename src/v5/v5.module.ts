import { Module } from '@nestjs/common';
import { BarController } from './bar/bar.controller';

@Module({
  controllers: [BarController]
})
export class V5Module {}
