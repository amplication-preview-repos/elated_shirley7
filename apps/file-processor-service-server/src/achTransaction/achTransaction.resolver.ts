import * as graphql from "@nestjs/graphql";
import { AchTransactionResolverBase } from "./base/achTransaction.resolver.base";
import { AchTransaction } from "./base/AchTransaction";
import { AchTransactionService } from "./achTransaction.service";

@graphql.Resolver(() => AchTransaction)
export class AchTransactionResolver extends AchTransactionResolverBase {
  constructor(protected readonly service: AchTransactionService) {
    super(service);
  }
}
