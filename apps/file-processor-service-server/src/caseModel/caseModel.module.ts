import { Module } from "@nestjs/common";
import { CaseModelModuleBase } from "./base/caseModel.module.base";
import { CaseModelService } from "./caseModel.service";
import { CaseModelController } from "./caseModel.controller";
import { CaseModelResolver } from "./caseModel.resolver";

@Module({
  imports: [CaseModelModuleBase],
  controllers: [CaseModelController],
  providers: [CaseModelService, CaseModelResolver],
  exports: [CaseModelService],
})
export class CaseModelModule {}
