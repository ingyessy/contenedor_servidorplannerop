import { Module } from '@nestjs/common';
import { OperationWorkerService } from './operation-worker.service';
import { OperationWorkerController } from './operation-worker.controller';
import { ValidationService } from 'src/common/validation/validation.service';

@Module({
  controllers: [OperationWorkerController],
  providers: [OperationWorkerService, ValidationService],
  exports: [OperationWorkerService],
})
export class OperationWorkerModule {}
