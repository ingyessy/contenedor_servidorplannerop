import { Module } from '@nestjs/common';
import { ClientProgrammingService } from './client-programming.service';
import { ClientProgrammingController } from './client-programming.controller';
import { ValidationModule } from 'src/common/validation/validation.module';

@Module({
  imports: [ValidationModule],
  controllers: [ClientProgrammingController],
  providers: [ClientProgrammingService],
})
export class ClientProgrammingModule {}
