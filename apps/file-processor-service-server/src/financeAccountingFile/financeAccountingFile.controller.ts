import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinanceAccountingFileService } from "./financeAccountingFile.service";
import { FinanceAccountingFileControllerBase } from "./base/financeAccountingFile.controller.base";

@swagger.ApiTags("financeAccountingFiles")
@common.Controller("financeAccountingFiles")
export class FinanceAccountingFileController extends FinanceAccountingFileControllerBase {
  constructor(protected readonly service: FinanceAccountingFileService) {
    super(service);
  }
}
