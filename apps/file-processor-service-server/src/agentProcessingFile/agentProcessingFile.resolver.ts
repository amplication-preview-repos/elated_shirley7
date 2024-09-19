import * as graphql from "@nestjs/graphql";
import { AgentProcessingFileResolverBase } from "./base/agentProcessingFile.resolver.base";
import { AgentProcessingFile } from "./base/AgentProcessingFile";
import { AgentProcessingFileService } from "./agentProcessingFile.service";

@graphql.Resolver(() => AgentProcessingFile)
export class AgentProcessingFileResolver extends AgentProcessingFileResolverBase {
  constructor(protected readonly service: AgentProcessingFileService) {
    super(service);
  }
}
