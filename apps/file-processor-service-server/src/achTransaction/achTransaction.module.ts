import { Module } from "@nestjs/common";
import { AchTransactionModuleBase } from "./base/achTransaction.module.base";
import { AchTransactionService } from "./achTransaction.service";
import { AchTransactionController } from "./achTransaction.controller";
import { AchTransactionResolver } from "./achTransaction.resolver";

@Module({
  imports: [AchTransactionModuleBase],
  controllers: [AchTransactionController],
  providers: [AchTransactionService, AchTransactionResolver],
  exports: [AchTransactionService],
})
export class AchTransactionModule {}
