import * as graphql from "@nestjs/graphql";
import { FinanceAccountingFileResolverBase } from "./base/financeAccountingFile.resolver.base";
import { FinanceAccountingFile } from "./base/FinanceAccountingFile";
import { FinanceAccountingFileService } from "./financeAccountingFile.service";

@graphql.Resolver(() => FinanceAccountingFile)
export class FinanceAccountingFileResolver extends FinanceAccountingFileResolverBase {
  constructor(protected readonly service: FinanceAccountingFileService) {
    super(service);
  }
}
