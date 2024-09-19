/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CaseModel } from "./CaseModel";
import { CaseModelCountArgs } from "./CaseModelCountArgs";
import { CaseModelFindManyArgs } from "./CaseModelFindManyArgs";
import { CaseModelFindUniqueArgs } from "./CaseModelFindUniqueArgs";
import { CreateCaseModelArgs } from "./CreateCaseModelArgs";
import { UpdateCaseModelArgs } from "./UpdateCaseModelArgs";
import { DeleteCaseModelArgs } from "./DeleteCaseModelArgs";
import { CaseModelService } from "../caseModel.service";
@graphql.Resolver(() => CaseModel)
export class CaseModelResolverBase {
  constructor(protected readonly service: CaseModelService) {}

  async _caseModelsMeta(
    @graphql.Args() args: CaseModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CaseModel])
  async caseModels(
    @graphql.Args() args: CaseModelFindManyArgs
  ): Promise<CaseModel[]> {
    return this.service.caseModels(args);
  }

  @graphql.Query(() => CaseModel, { nullable: true })
  async caseModel(
    @graphql.Args() args: CaseModelFindUniqueArgs
  ): Promise<CaseModel | null> {
    const result = await this.service.caseModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CaseModel)
  async createCaseModel(
    @graphql.Args() args: CreateCaseModelArgs
  ): Promise<CaseModel> {
    return await this.service.createCaseModel({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CaseModel)
  async updateCaseModel(
    @graphql.Args() args: UpdateCaseModelArgs
  ): Promise<CaseModel | null> {
    try {
      return await this.service.updateCaseModel({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CaseModel)
  async deleteCaseModel(
    @graphql.Args() args: DeleteCaseModelArgs
  ): Promise<CaseModel | null> {
    try {
      return await this.service.deleteCaseModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
