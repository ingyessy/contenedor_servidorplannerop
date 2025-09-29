import { Module } from '@nestjs/common';
import { OperationsCronService } from './cron-job.service';
import { UpdateOperationService } from './services/update-operation.service';
import { UpdateWorkerService } from './services/update-worker.service';
import { UpdateOperationWorkerService } from './services/update-operation-worker.service';

@Module({
  providers: [
    OperationsCronService,
    UpdateOperationService,
    UpdateWorkerService,
    UpdateOperationWorkerService
  ],
  exports: [OperationsCronService],
})
export class CronJobModule {}
