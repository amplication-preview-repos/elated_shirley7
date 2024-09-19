import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchTransactionService } from "./achTransaction.service";
import { AchTransactionControllerBase } from "./base/achTransaction.controller.base";

@swagger.ApiTags("achTransactions")
@common.Controller("achTransactions")
export class AchTransactionController extends AchTransactionControllerBase {
  constructor(protected readonly service: AchTransactionService) {
    super(service);
  }
}
