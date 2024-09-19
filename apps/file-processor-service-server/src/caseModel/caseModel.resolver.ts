import * as graphql from "@nestjs/graphql";
import { CaseModelResolverBase } from "./base/caseModel.resolver.base";
import { CaseModel } from "./base/CaseModel";
import { CaseModelService } from "./caseModel.service";

@graphql.Resolver(() => CaseModel)
export class CaseModelResolver extends CaseModelResolverBase {
  constructor(protected readonly service: CaseModelService) {
    super(service);
  }
}
