import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CaseModelService } from "./caseModel.service";
import { CaseModelControllerBase } from "./base/caseModel.controller.base";

@swagger.ApiTags("caseModels")
@common.Controller("caseModels")
export class CaseModelController extends CaseModelControllerBase {
  constructor(protected readonly service: CaseModelService) {
    super(service);
  }
}
