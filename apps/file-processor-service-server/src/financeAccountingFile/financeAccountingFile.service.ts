import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinanceAccountingFileServiceBase } from "./base/financeAccountingFile.service.base";

@Injectable()
export class FinanceAccountingFileService extends FinanceAccountingFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
