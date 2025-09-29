import { Module } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { ExcelExportService } from './services/excel-export.service';


@Module({
  providers: [ValidationService, ExcelExportService],
  exports: [ValidationService, ExcelExportService],
})
export class ValidationModule {}