import * as graphql from "@nestjs/graphql";
import { FileTemplateResolverBase } from "./base/fileTemplate.resolver.base";
import { FileTemplate } from "./base/FileTemplate";
import { FileTemplateService } from "./fileTemplate.service";

@graphql.Resolver(() => FileTemplate)
export class FileTemplateResolver extends FileTemplateResolverBase {
  constructor(protected readonly service: FileTemplateService) {
    super(service);
  }
}
