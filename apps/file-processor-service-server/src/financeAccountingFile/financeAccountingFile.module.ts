import { Module } from "@nestjs/common";
import { FinanceAccountingFileModuleBase } from "./base/financeAccountingFile.module.base";
import { FinanceAccountingFileService } from "./financeAccountingFile.service";
import { FinanceAccountingFileController } from "./financeAccountingFile.controller";
import { FinanceAccountingFileResolver } from "./financeAccountingFile.resolver";

@Module({
  imports: [FinanceAccountingFileModuleBase],
  controllers: [FinanceAccountingFileController],
  providers: [FinanceAccountingFileService, FinanceAccountingFileResolver],
  exports: [FinanceAccountingFileService],
})
export class FinanceAccountingFileModule {}
