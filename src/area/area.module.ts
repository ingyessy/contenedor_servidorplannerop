import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [AreaController],
  providers: [AreaService, UserService],
})
export class AreaModule {}
