import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileTemplateService } from "./fileTemplate.service";
import { FileTemplateControllerBase } from "./base/fileTemplate.controller.base";

@swagger.ApiTags("fileTemplates")
@common.Controller("fileTemplates")
export class FileTemplateController extends FileTemplateControllerBase {
  constructor(protected readonly service: FileTemplateService) {
    super(service);
  }
}
