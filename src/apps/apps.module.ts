import { Module } from '@nestjs/common';
import { AppsController } from './apps.controller';
import { AppsService } from './apps.service';
import { AppsResolver } from './apps.resolver';

@Module({
  controllers: [AppsController],
  providers: [AppsService, AppsResolver]
})
export class AppsModule {}
