import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgentProcessingFileService } from "./agentProcessingFile.service";
import { AgentProcessingFileControllerBase } from "./base/agentProcessingFile.controller.base";

@swagger.ApiTags("agentProcessingFiles")
@common.Controller("agentProcessingFiles")
export class AgentProcessingFileController extends AgentProcessingFileControllerBase {
  constructor(protected readonly service: AgentProcessingFileService) {
    super(service);
  }
}
