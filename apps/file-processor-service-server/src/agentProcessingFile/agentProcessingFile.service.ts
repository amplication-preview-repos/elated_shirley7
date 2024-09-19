import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgentProcessingFileServiceBase } from "./base/agentProcessingFile.service.base";

@Injectable()
export class AgentProcessingFileService extends AgentProcessingFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
