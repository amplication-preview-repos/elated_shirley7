import { Module } from "@nestjs/common";
import { AgentProcessingFileModuleBase } from "./base/agentProcessingFile.module.base";
import { AgentProcessingFileService } from "./agentProcessingFile.service";
import { AgentProcessingFileController } from "./agentProcessingFile.controller";
import { AgentProcessingFileResolver } from "./agentProcessingFile.resolver";

@Module({
  imports: [AgentProcessingFileModuleBase],
  controllers: [AgentProcessingFileController],
  providers: [AgentProcessingFileService, AgentProcessingFileResolver],
  exports: [AgentProcessingFileService],
})
export class AgentProcessingFileModule {}
