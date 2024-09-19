import { Module } from "@nestjs/common";
import { FileTemplateModuleBase } from "./base/fileTemplate.module.base";
import { FileTemplateService } from "./fileTemplate.service";
import { FileTemplateController } from "./fileTemplate.controller";
import { FileTemplateResolver } from "./fileTemplate.resolver";

@Module({
  imports: [FileTemplateModuleBase],
  controllers: [FileTemplateController],
  providers: [FileTemplateService, FileTemplateResolver],
  exports: [FileTemplateService],
})
export class FileTemplateModule {}
