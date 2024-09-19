import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileTemplateServiceBase } from "./base/fileTemplate.service.base";

@Injectable()
export class FileTemplateService extends FileTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
